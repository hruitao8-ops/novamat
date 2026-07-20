"use client";

import { useEffect, useRef, useCallback, useTransition } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    FileUp,
    CircleUserRound,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
    SendIcon,
    XIcon,
    LoaderIcon,
    Sparkles,
    Bot,
    ChevronUp,
    CheckIcon,
    FlaskConical,
    Beaker,
    Upload,
    BarChart3,
    BrainCircuit,
    FileText,
    ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react"

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            textarea.style.height = `${minHeight}px`;
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string;
  showRing?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, containerClassName, showRing = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
      <div className={cn(
        "relative",
        containerClassName
      )}>
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
            "transition-all duration-200 ease-in-out",
            "placeholder:text-muted-foreground",
            "disabled:cursor-not-allowed disabled:opacity-50",
            showRing ? "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" : "",
            className
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {showRing && isFocused && (
          <motion.span
            className="absolute inset-0 rounded-md pointer-events-none ring-2 ring-offset-0 ring-violet-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export interface AIModel {
    id: string;
    name: string;
    provider: string;
    description: string;
    color: string;
    icon: string;
}

export const AI_MODELS: AIModel[] = [
    { id: "deepseek-v3", name: "DeepSeek V3", provider: "DeepSeek", description: "深度推理能力出众，数学代码表现优异", color: "#4D6BFE", icon: "🧠" },
    { id: "deepseek-r1", name: "DeepSeek R1", provider: "DeepSeek", description: "深度思考模型，复杂推理链", color: "#6366F1", icon: "🔬" },
    { id: "qwen-max", name: "通义千问 Max", provider: "阿里云", description: "通义旗舰模型，综合能力领先", color: "#FF6A00", icon: "🤖" },
    { id: "qwen-plus", name: "通义千问 Plus", provider: "阿里云", description: "高性价比模型，响应速度快", color: "#FF8C38", icon: "⚡" },
    { id: "glm-4", name: "GLM-4", provider: "智谱AI", description: "中英双语旗舰模型", color: "#10B981", icon: "🌱" },
    { id: "yi-large", name: "Yi-Large", provider: "零一万物", description: "大参数模型，长文本理解强", color: "#8B5CF6", icon: "🌐" },
    { id: "moonshot-v1", name: "Moonshot V1", provider: "月之暗面", description: "超长上下文，文档分析利器", color: "#0EA5E9", icon: "🌙" },
    { id: "doubao-pro", name: "豆包 Pro", provider: "字节跳动", description: "字节旗舰模型，多模态能力强", color: "#F43F5E", icon: "🫘" },
    { id: "ernie-4", name: "文心一言 4.0", provider: "百度", description: "百度旗舰模型，中文理解深厚", color: "#2563EB", icon: "📖" },
    { id: "hunyuan", name: "混元 Turbo", provider: "腾讯", description: "腾讯旗舰模型，生态融合", color: "#059669", icon: "☁️" },
];

interface AnimatedAIChatProps {
    activePanel: 'new-experiment' | 'upload-data' | 'smart-analysis' | null;
    setActivePanel: (panel: 'new-experiment' | 'upload-data' | 'smart-analysis' | null) => void;
    selectedModel: AIModel;
    setSelectedModel: (model: AIModel) => void;
}

export function AnimatedAIChat({ activePanel, setActivePanel, selectedModel, setSelectedModel }: AnimatedAIChatProps) {
    const [value, setValue] = useState("");
    const [attachments, setAttachments] = useState<string[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showModelPanel, setShowModelPanel] = useState(false);
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });
    const [inputFocused, setInputFocused] = useState(false);
    const modelPanelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const modelButton = document.querySelector('[data-model-button]');

            if (modelPanelRef.current &&
                !modelPanelRef.current.contains(target) &&
                !modelButton?.contains(target)) {
                setShowModelPanel(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                handleSendMessage();
            }
        }
    };

    const handleSendMessage = () => {
        if (value.trim()) {
            startTransition(() => {
                setIsTyping(true);
                setTimeout(() => {
                    setIsTyping(false);
                    setValue("");
                    adjustHeight(true);
                }, 3000);
            });
        }
    };

    const handleAttachFile = () => {
        const mockFileName = `file-${Math.floor(Math.random() * 1000)}.pdf`;
        setAttachments(prev => [...prev, mockFileName]);
    };

    const removeAttachment = (index: number) => {
        setAttachments(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col w-full items-center justify-center text-gray-900 dark:text-white p-6 relative">
            <div className="w-full max-w-2xl mx-auto relative">
                <motion.div
                    className="relative z-10 space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className="relative backdrop-blur-2xl bg-gray-50 dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-white/[0.08] shadow-2xl"
                        initial={{ scale: 0.98 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <AnimatePresence>
                            {showModelPanel && (
                                <motion.div
                                    ref={modelPanelRef}
                                    className="absolute left-4 right-4 bottom-full mb-2 backdrop-blur-xl bg-white dark:bg-black/95 rounded-xl z-50 shadow-2xl border border-gray-200 dark:border-white/[0.08] overflow-hidden"
                                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <div className="p-3 border-b border-gray-200 dark:border-white/[0.06]">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-600 dark:text-white/50 font-medium">选择大模型</span>
                                            <span className="text-[10px] text-gray-400 dark:text-white/30">{AI_MODELS.length} 个模型可用</span>
                                        </div>
                                    </div>
                                    <div className="max-h-[320px] overflow-y-auto p-2">
                                        {AI_MODELS.map((model, index) => (
                                            <motion.button
                                                key={model.id}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedModel(model);
                                                    setShowModelPanel(false);
                                                }}
                                                className={cn(
                                                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left",
                                                    selectedModel.id === model.id
                                                        ? "bg-gray-100 dark:bg-white/[0.08] border border-gray-300 dark:border-white/[0.12]"
                                                        : "hover:bg-gray-50 dark:hover:bg-white/[0.04] border border-transparent"
                                                )}
                                                initial={{ opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.03 }}
                                                whileHover={{ x: 2 }}
                                            >
                                                <div
                                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                                                    style={{ backgroundColor: model.color + '18' }}
                                                >
                                                    {model.icon}
                                                </div>
                                                    <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-900 dark:text-white/90 font-medium">{model.name}</span>
                                                        <span className="text-[10px] text-gray-400 dark:text-white/30 px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/[0.04]">{model.provider}</span>
                                                    </div>
                                                    <p className="text-[11px] text-gray-500 dark:text-white/35 mt-0.5 truncate">{model.description}</p>
                                                </div>
                                                {selectedModel.id === model.id && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                    >
                                                        <CheckIcon className="w-4 h-4 text-emerald-400" />
                                                    </motion.div>
                                                )}
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="p-4">
                            <Textarea
                                ref={textareaRef}
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    adjustHeight();
                                }}
                                onKeyDown={handleKeyDown}
                                onFocus={() => setInputFocused(true)}
                                onBlur={() => setInputFocused(false)}
                                placeholder="Ask NovaMat AI a question..."
                                containerClassName="w-full"
                                className={cn(
                                    "w-full px-4 py-3",
                                    "resize-none",
                                    "bg-transparent",
                                    "border-none",
                                    "text-gray-900 dark:text-white/90 text-sm",
                                    "focus:outline-none",
                                    "placeholder:text-gray-400 dark:placeholder:text-white/20",
                                    "min-h-[60px]"
                                )}
                                style={{
                                    overflow: "hidden",
                                }}
                                showRing={false}
                            />
                        </div>

                        <AnimatePresence>
                            {attachments.length > 0 && (
                                <motion.div
                                    className="px-4 pb-3 flex gap-2 flex-wrap"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    {attachments.map((file, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-2 text-xs bg-gray-100 dark:bg-white/[0.03] py-1.5 px-3 rounded-lg text-gray-600 dark:text-white/70"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                        >
                                            <span>{file}</span>
                                            <button
                                                onClick={() => removeAttachment(index)}
                                                className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors"
                                            >
                                                <XIcon className="w-3 h-3" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="p-4 border-t border-gray-200 dark:border-white/[0.06] flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <motion.button
                                    type="button"
                                    data-model-button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowModelPanel(prev => !prev);
                                    }}
                                    whileTap={{ scale: 0.94 }}
                                    className={cn(
                                        "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all relative group",
                                        showModelPanel
                                            ? "bg-gray-100 dark:bg-white/[0.08] text-gray-900 dark:text-white/90 border border-gray-300 dark:border-white/[0.12]"
                                            : "text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white/90 border border-gray-200 dark:border-white/[0.06] hover:border-gray-300 dark:hover:border-white/[0.12]"
                                    )}
                                >
                                    <Bot className="w-3.5 h-3.5" />
                                    <span className="text-[11px] font-medium">{selectedModel.name}</span>
                                    <motion.span
                                        animate={{ rotate: showModelPanel ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronUp className="w-3 h-3 opacity-50" />
                                    </motion.span>
                                </motion.button>
                                <motion.button
                                    type="button"
                                    onClick={handleAttachFile}
                                    whileTap={{ scale: 0.94 }}
                                    className="p-2 text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white/90 rounded-lg transition-colors relative group"
                                >
                                    <Paperclip className="w-4 h-4" />
                                    <motion.span
                                        className="absolute inset-0 bg-gray-100 dark:bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                        layoutId="button-highlight"
                                    />
                                </motion.button>
                            </div>

                            <motion.button
                                type="button"
                                onClick={handleSendMessage}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isTyping || !value.trim()}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                    "flex items-center gap-2",
                                    value.trim()
                                        ? "bg-gray-900 dark:bg-white text-white dark:text-[#0A0A0B] shadow-lg shadow-gray-900/10 dark:shadow-white/10"
                                        : "bg-gray-100 dark:bg-white/[0.05] text-gray-400 dark:text-white/40"
                                )}
                            >
                                {isTyping ? (
                                    <LoaderIcon className="w-4 h-4 animate-[spin_2s_linear_infinite]" />
                                ) : (
                                    <SendIcon className="w-4 h-4" />
                                )}
                                <span>Send</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <ActionButton
                            icon={<PlusIcon className="w-4 h-4" />}
                            label="新建实验"
                            onClick={() => setActivePanel(activePanel === 'new-experiment' ? null : 'new-experiment')}
                            isActive={activePanel === 'new-experiment'}
                        />
                        <ActionButton
                            icon={<FileUp className="w-4 h-4" />}
                            label="上传数据"
                            onClick={() => setActivePanel(activePanel === 'upload-data' ? null : 'upload-data')}
                            isActive={activePanel === 'upload-data'}
                        />
                        <ActionButton
                            icon={<Sparkles className="w-4 h-4" />}
                            label="智能分析"
                            onClick={() => setActivePanel(activePanel === 'smart-analysis' ? null : 'smart-analysis')}
                            isActive={activePanel === 'smart-analysis'}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        {activePanel && (
                            <motion.div
                                key={activePanel}
                                initial={{ opacity: 0, y: 15, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.97 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full"
                            >
                                {activePanel === 'new-experiment' && <NewExperimentPanel onClose={() => setActivePanel(null)} />}
                                {activePanel === 'upload-data' && <UploadDataPanel onClose={() => setActivePanel(null)} />}
                                {activePanel === 'smart-analysis' && <SmartAnalysisPanel onClose={() => setActivePanel(null)} />}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {isTyping && (
                    <motion.div
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 backdrop-blur-2xl bg-gray-100 dark:bg-white/[0.03] rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-white/[0.08]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-7 rounded-full bg-gray-200 dark:bg-white/[0.05] flex items-center justify-center text-center">
                                <span className="text-xs font-medium text-gray-900 dark:text-white/90 mb-0.5">AI</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/70">
                                <span>Thinking</span>
                                <TypingDots />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {inputFocused && (
                <motion.div
                    className="fixed w-[50rem] h-[50rem] rounded-full pointer-events-none z-0 opacity-[0.015] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 blur-[96px]"
                    animate={{
                        x: mousePosition.x - 400,
                        y: mousePosition.y - 400,
                    }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 150,
                        mass: 0.5,
                    }}
                />
            )}
        </div>
    );
}

function TypingDots() {
    return (
        <div className="flex items-center ml-1">
            {[1, 2, 3].map((dot) => (
                <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 bg-gray-900 dark:bg-white/90 rounded-full mx-0.5"
                    initial={{ opacity: 0.3 }}
                    animate={{
                        opacity: [0.3, 0.9, 0.3],
                        scale: [0.85, 1.1, 0.85]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.15,
                        ease: "easeInOut",
                    }}
                    style={{
                        boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
                    }}
                />
            ))}
        </div>
    );
}

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    isActive?: boolean;
}

function ActionButton({ icon, label, onClick, isActive }: ActionButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            type="button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border transition-all relative overflow-hidden group",
                isActive
                    ? "bg-violet-500/10 border-violet-500/30 text-violet-300"
                    : "bg-gray-100 dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-neutral-800 border-gray-200 dark:border-neutral-800 text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white"
            )}
        >
            <div className="relative z-10 flex items-center gap-2">
                {icon}
                <span className="text-xs relative z-10">{label}</span>
            </div>

            <AnimatePresence>
                {(isHovered || isActive) && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>

            {isActive && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500"
                    layoutId="active-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
            )}
        </motion.button>
    );
}

const EXPERIMENT_TYPES = [
    { id: "synthesis", name: "材料合成", icon: "⚗️", desc: "无机/有机材料合成实验" },
    { id: "characterization", name: "材料表征", icon: "🔬", desc: "XRD、SEM、TEM 等表征分析" },
    { id: "simulation", name: "模拟仿真", icon: "💻", desc: "分子动力学、有限元仿真" },
    { id: "property", name: "性能测试", icon: "📊", desc: "力学、热学、电学性能" },
    { id: "process", name: "工艺优化", icon: "⚙️", desc: "参数优化与工艺设计" },
    { id: "custom", name: "自定义实验", icon: "🧪", desc: "自由定义实验流程" },
];

const ANALYSIS_TYPES = [
    { id: "regression", name: "回归分析", icon: "📈", desc: "拟合与回归建模" },
    { id: "classification", name: "分类分析", icon: "🏷️", desc: "模式识别与分类" },
    { id: "clustering", name: "聚类分析", icon: "🎯", desc: "无监督聚类" },
    { id: "optimization", name: "优化分析", icon: "🔧", desc: "参数寻优" },
    { id: "prediction", name: "预测建模", icon: "🔮", desc: "时间序列预测" },
    { id: "comparison", name: "对比分析", icon: "⚖️", desc: "多组实验对比" },
];

/* ====== 新建实验面板 ====== */
function NewExperimentPanel({ onClose }: { onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [expName, setExpName] = useState("");
    const [expDesc, setExpDesc] = useState("");
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [params, setParams] = useState<Record<string, string>>({});
    const [isCreated, setIsCreated] = useState(false);

    const handleCreate = () => {
        setIsCreated(true);
        setTimeout(() => {
            setIsCreated(false);
            setStep(1);
            setExpName("");
            setExpDesc("");
            setSelectedType(null);
            setParams({});
            onClose();
        }, 2500);
    };

    return (
        <div className="backdrop-blur-2xl bg-gray-100 dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-white/[0.08] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-violet-100 dark:bg-violet-500/15 flex items-center justify-center">
                        <FlaskConical className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white/90">新建实验</h3>
                        <p className="text-[10px] text-gray-400 dark:text-white/35">创建材料科学虚拟仿真实验</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                        {[1, 2, 3].map(s => (
                            <div key={s} className={cn(
                                "w-1.5 h-1.5 rounded-full transition-colors",
                                step >= s ? "bg-violet-400" : "bg-gray-300 dark:bg-white/15"
                            )} />
                        ))}
                        <span className="text-[10px] text-gray-400 dark:text-white/30 ml-1">{step}/3</span>
                    </div>
                    <motion.button onClick={onClose} whileTap={{ scale: 0.9 }} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-white/[0.06] text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white/80 transition-colors">
                        <XIcon className="w-3.5 h-3.5" />
                    </motion.button>
                </div>
            </div>

            <div className="p-5">
                {isCreated ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }}>
                            <CheckIcon className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                        </motion.div>
                        <p className="text-gray-900 dark:text-white/90 text-sm font-medium">实验创建成功</p>
                        <p className="text-gray-500 dark:text-white/40 text-xs mt-1">正在跳转至实验工作台...</p>
                    </motion.div>
                ) : step === 1 ? (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <p className="text-xs text-gray-500 dark:text-white/50 mb-3">选择实验类型</p>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            {EXPERIMENT_TYPES.map(t => (
                                <motion.button key={t.id} type="button" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                    onClick={() => setSelectedType(t.id)}
                                    className={cn(
                                        "flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all",
                                        selectedType === t.id
                                            ? "bg-violet-500/10 border-violet-500/25 text-white/90"
                                            : "bg-gray-50 dark:bg-white/[0.02] border-gray-200 dark:border-white/[0.06] text-gray-500 dark:text-white/50 hover:bg-white/[0.05] hover:text-gray-800 dark:text-white/80"
                                    )}>
                                    <span className="text-lg">{t.icon}</span>
                                    <span className="text-[11px] font-medium">{t.name}</span>
                                </motion.button>
                            ))}
                        </div>
                        <div className="flex justify-end">
                            <motion.button type="button" whileTap={{ scale: 0.97 }}
                                disabled={!selectedType}
                                onClick={() => setStep(2)}
                                className={cn("px-4 py-2 rounded-lg text-xs font-medium transition-all",
                                    selectedType ? "bg-violet-500/80 hover:bg-violet-500 text-white" : "bg-gray-100 dark:bg-white/[0.04] text-gray-300 dark:text-white/25 cursor-not-allowed"
                                )}>
                                下一步
                            </motion.button>
                        </div>
                    </motion.div>
                ) : step === 2 ? (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <p className="text-xs text-gray-500 dark:text-white/50 mb-3">填写实验信息</p>
                        <div className="space-y-3 mb-4">
                            <div>
                                <label className="text-[10px] text-gray-400 dark:text-white/35 uppercase tracking-wider mb-1 block">实验名称</label>
                                <input type="text" value={expName} onChange={e => setExpName(e.target.value)} placeholder="例：ZnO纳米颗粒合成实验"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-sm text-gray-900 dark:text-white/90 placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:border-violet-500/30 transition-colors" />
                            </div>
                            <div>
                                <label className="text-[10px] text-gray-400 dark:text-white/35 uppercase tracking-wider mb-1 block">实验描述</label>
                                <textarea value={expDesc} onChange={e => setExpDesc(e.target.value)} rows={2} placeholder="简要描述实验目的..."
                                    className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-sm text-gray-900 dark:text-white/90 placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:border-violet-500/30 transition-colors resize-none" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <motion.button type="button" onClick={() => setStep(1)} whileTap={{ scale: 0.97 }}
                                className="px-4 py-2 rounded-lg text-xs text-gray-500 dark:text-white/50 hover:text-gray-800 dark:text-white/80 hover:bg-gray-100 dark:bg-white/[0.04] transition-all">
                                上一步
                            </motion.button>
                            <motion.button type="button" whileTap={{ scale: 0.97 }}
                                disabled={!expName.trim()}
                                onClick={() => setStep(3)}
                                className={cn("px-4 py-2 rounded-lg text-xs font-medium transition-all",
                                    expName.trim() ? "bg-violet-500/80 hover:bg-violet-500 text-white" : "bg-gray-100 dark:bg-white/[0.04] text-gray-300 dark:text-white/25 cursor-not-allowed"
                                )}>
                                下一步
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <p className="text-xs text-gray-500 dark:text-white/50 mb-3">配置实验参数</p>
                        <div className="space-y-2.5 mb-4">
                            {["温度 (°C)", "压力 (MPa)", "时间 (h)"].map(param => (
                                <div key={param} className="flex items-center gap-3">
                                    <span className="text-[11px] text-gray-500 dark:text-white/50 w-24 shrink-0">{param}</span>
                                    <input type="text" placeholder="输入数值"
                                        onChange={e => setParams(prev => ({ ...prev, [param]: e.target.value }))}
                                        className="flex-1 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] text-xs text-gray-900 dark:text-white/90 placeholder:text-gray-400 dark:placeholder:text-white/15 focus:outline-none focus:border-violet-500/30 transition-colors" />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06] mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm">{EXPERIMENT_TYPES.find(t => t.id === selectedType)?.icon}</span>
                                <div>
                                    <p className="text-xs text-gray-800 dark:text-white/80 font-medium">{expName}</p>
                                    <p className="text-[10px] text-gray-400 dark:text-white/30">{EXPERIMENT_TYPES.find(t => t.id === selectedType)?.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <motion.button type="button" onClick={() => setStep(2)} whileTap={{ scale: 0.97 }}
                                className="px-4 py-2 rounded-lg text-xs text-gray-500 dark:text-white/50 hover:text-gray-800 dark:text-white/80 hover:bg-gray-100 dark:bg-white/[0.04] transition-all">
                                上一步
                            </motion.button>
                            <motion.button type="button" onClick={handleCreate} whileTap={{ scale: 0.97 }}
                                className="px-5 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-500/20">
                                创建实验
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

/* ====== 上传数据面板 ====== */
function UploadDataPanel({ onClose }: { onClose: () => void }) {
    const [isDragOver, setIsDragOver] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; size: string; type: string; status: 'uploading' | 'done' }>>([]);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = Array.from(e.dataTransfer.files);
        addFiles(files);
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            addFiles(Array.from(e.target.files));
        }
    };

    const addFiles = (files: File[]) => {
        files.forEach(file => {
            const newFile = {
                name: file.name,
                size: file.size > 1024 * 1024 ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : `${(file.size / 1024).toFixed(1)} KB`,
                type: file.name.split('.').pop() || 'unknown',
                status: 'uploading' as const,
            };
            setUploadedFiles(prev => [...prev, newFile]);
            setTimeout(() => {
                setUploadedFiles(prev => prev.map(f => f.name === newFile.name ? { ...f, status: 'done' } : f));
            }, 1200);
        });
    };

    const removeFile = (name: string) => {
        setUploadedFiles(prev => prev.filter(f => f.name !== name));
    };

    return (
        <div className="backdrop-blur-2xl bg-gray-50 dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-white/[0.08] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-500/15 flex items-center justify-center">
                        <Upload className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white/90">上传数据</h3>
                        <p className="text-[10px] text-gray-500 dark:text-white/35">支持 CSV, JSON, Excel 等格式</p>
                    </div>
                </div>
                <motion.button onClick={onClose} whileTap={{ scale: 0.9 }} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-white/[0.06] text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white/80 transition-colors">
                    <XIcon className="w-3.5 h-3.5" />
                </motion.button>
            </div>

            <div className="p-5 space-y-4">
                <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleDrop}
                    className={cn(
                        "relative border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer group",
                        isDragOver
                            ? "border-violet-400/50 bg-violet-500/[0.04]"
                            : "border-gray-200 dark:border-white/[0.08] hover:border-gray-300 dark:hover:border-white/[0.15] hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                    )}
                    onClick={() => document.getElementById('file-upload-input')?.click()}
                >
                    <input id="file-upload-input" type="file" multiple className="hidden" onChange={handleFileSelect} accept=".csv,.json,.xlsx,.xls,.txt,.dat" />
                    <motion.div animate={{ y: isDragOver ? -4 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                        <Upload className={cn("w-8 h-8 mx-auto mb-2 transition-colors", isDragOver ? "text-violet-400" : "text-gray-300 dark:text-white/20 group-hover:text-white/35")} />
                    </motion.div>
                    <p className="text-xs text-gray-500 dark:text-white/50 group-hover:text-white/70 transition-colors">
                        {isDragOver ? '释放文件以上传' : '拖拽文件到此处，或点击选择'}
                    </p>
                    <p className="text-[10px] text-gray-300 dark:text-white/25 mt-1">CSV · JSON · Excel · TXT · DAT</p>
                </div>

                {uploadedFiles.length > 0 && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-2">
                        <p className="text-[10px] text-gray-400 dark:text-white/35 uppercase tracking-wider">已上传文件 ({uploadedFiles.length})</p>
                        {uploadedFiles.map((file) => (
                            <motion.div key={file.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06]">
                                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/[0.04] flex items-center justify-center shrink-0">
                                    <FileText className="w-4 h-4 text-gray-500 dark:text-white/40" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-gray-800 dark:text-white/80 truncate">{file.name}</p>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-[10px] text-gray-400 dark:text-white/30">{file.size}</span>
                                        <span className="text-[10px] text-gray-300 dark:text-white/20">·</span>
                                        <span className="text-[10px] text-gray-400 dark:text-white/30 uppercase">{file.type}</span>
                                    </div>
                                </div>
                                {file.status === 'uploading' ? (
                                    <div className="w-4 h-4">
                                        <LoaderIcon className="w-4 h-4 text-gray-500 dark:text-white/40 animate-spin" />
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                                        <button onClick={() => removeFile(file.name)} className="p-0.5 rounded hover:bg-white/[0.06] text-gray-300 dark:text-white/25 hover:text-white/60 transition-colors">
                                            <XIcon className="w-3 h-3" />
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}

/* ====== 智能分析面板 ====== */
function SmartAnalysisPanel({ onClose }: { onClose: () => void }) {
    const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);
    const [dataSource, setDataSource] = useState<string>('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const handleAnalyze = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setIsDone(true);
        }, 3500);
    };

    const handleReset = () => {
        setSelectedAnalysis(null);
        setDataSource('');
        setIsDone(false);
    };

    return (
        <div className="backdrop-blur-2xl bg-gray-50 dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-white/[0.08] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-500/15 flex items-center justify-center">
                        <BrainCircuit className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white/90">智能分析</h3>
                        <p className="text-[10px] text-gray-500 dark:text-white/35">AI 驱动的数据洞察引擎</p>
                    </div>
                </div>
                <motion.button onClick={() => { handleReset(); onClose(); }} whileTap={{ scale: 0.9 }} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-white/[0.06] text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white/80 transition-colors">
                    <XIcon className="w-3.5 h-3.5" />
                </motion.button>
            </div>

            <div className="p-5">
                {isAnalyzing ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                        <div className="relative w-16 h-16 mx-auto mb-4">
                            <motion.div className="absolute inset-0 rounded-full border-2 border-violet-500/20" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                            <motion.div className="absolute inset-0 rounded-full border-2 border-transparent border-t-violet-400" animate={{ rotate: -360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                            <BrainCircuit className="absolute inset-0 m-auto w-6 h-6 text-violet-400" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-white/70">AI 正在分析数据...</p>
                        <div className="flex items-center justify-center gap-1.5 mt-2">
                            {[1, 2, 3, 4].map(i => (
                                <motion.div key={i} className="w-1 h-3 bg-violet-400/40 rounded-full"
                                    animate={{ height: ['12px', '20px', '12px'] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }} />
                            ))}
                        </div>
                    </motion.div>
                ) : isDone ? (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/15">
                            <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                            <p className="text-xs text-emerald-300/80">分析完成 — 发现 {3 + Math.floor(Math.random() * 5)} 条关键洞察</p>
                        </div>
                        <div className="space-y-2">
                            {[
                                { title: "数据趋势", value: "+23.5%", color: "text-emerald-400", detail: "材料性能呈现上升趋势" },
                                { title: "异常检测", value: "2 项", color: "text-amber-400", detail: "发现 2 个异常数据点" },
                                { title: "置信度", value: "94.2%", color: "text-violet-400", detail: "模型置信度评分" },
                            ].map((item, i) => (
                                <motion.div key={item.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
                                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06]">
                                    <div className="flex items-center gap-2.5">
                                        <BarChart3 className="w-4 h-4 text-gray-400 dark:text-white/30" />
                                        <div>
                                            <p className="text-xs text-gray-700 dark:text-white/70">{item.title}</p>
                                            <p className="text-[10px] text-gray-400 dark:text-white/25">{item.detail}</p>
                                        </div>
                                    </div>
                                    <span className={cn("text-sm font-medium", item.color)}>{item.value}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex gap-2 mt-4">
                            <motion.button onClick={handleReset} whileTap={{ scale: 0.97 }}
                                className="flex-1 px-3 py-2 rounded-lg text-xs text-gray-500 dark:text-white/50 hover:text-gray-800 dark:text-white/80 bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] transition-all">
                                重新分析
                            </motion.button>
                            <motion.button onClick={() => { handleReset(); onClose(); }} whileTap={{ scale: 0.97 }}
                                className="flex-1 px-3 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-500/15">
                                查看报告
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                        <p className="text-xs text-gray-500 dark:text-white/50 mb-3">选择分析类型</p>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            {ANALYSIS_TYPES.map(t => (
                                <motion.button key={t.id} type="button" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                    onClick={() => setSelectedAnalysis(t.id)}
                                    className={cn(
                                        "flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all",
                                        selectedAnalysis === t.id
                                            ? "bg-amber-100 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/25 text-gray-900 dark:text-white/90"
                                            : "bg-gray-50 dark:bg-white/[0.02] border-gray-200 dark:border-white/[0.06] text-gray-500 dark:text-white/50 hover:bg-gray-100 dark:hover:bg-white/[0.05] hover:text-gray-800 dark:hover:text-white/80"
                                    )}>
                                    <span className="text-lg">{t.icon}</span>
                                    <span className="text-[11px] font-medium">{t.name}</span>
                                </motion.button>
                            ))}
                        </div>
                        <div className="mb-4">
                            <label className="text-[10px] text-gray-400 dark:text-white/35 uppercase tracking-wider mb-1 block">数据来源</label>
                            <input type="text" value={dataSource} onChange={e => setDataSource(e.target.value)} placeholder="输入数据集名称或上传文件路径"
                                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-sm text-gray-900 dark:text-white/90 placeholder:text-gray-300 dark:text-white/20 focus:outline-none focus:border-amber-500/30 transition-colors" />
                        </div>
                        <div className="flex justify-end">
                            <motion.button type="button" onClick={handleAnalyze} whileTap={{ scale: 0.97 }}
                                disabled={!selectedAnalysis || !dataSource.trim()}
                                className={cn("px-5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5",
                                    selectedAnalysis && dataSource.trim()
                                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/15"
                                        : "bg-gray-100 dark:bg-white/[0.04] text-gray-300 dark:text-white/25 cursor-not-allowed"
                                )}>
                                <Sparkles className="w-3.5 h-3.5" />
                                开始分析
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

const rippleKeyframes = `
@keyframes ripple {
  0% { transform: scale(0.5); opacity: 0.6; }
  100% { transform: scale(2); opacity: 0; }
}
`;

if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = rippleKeyframes;
    document.head.appendChild(style);
}
