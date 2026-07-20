"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Crown,
  Zap,
  Shield,
  CreditCard,
  Smartphone,
  Loader2,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";


/* ───── 会员数据 ───── */

interface TierData {
  value: string;
  label: string;
  priceMonthly: number;
  description: string;
  color: string;
  glow: string;
  badge?: string;
  features: string[];
}

const TIERS: TierData[] = [
  {
    value: "free",
    label: "免费版",
    priceMonthly: 0,
    description: "适合个人体验",
    color: "from-gray-500/40 to-gray-400",
    glow: "0 0 20px rgba(156,163,175,0.25)",
    features: [
      "每月 10 次实验",
      "每月 50 次 AI 对话",
      "1GB 数据存储",
      "基础导出 (CSV)",
      "社区支持",
    ],
  },
  {
    value: "basic",
    label: "基础版",
    priceMonthly: 29,
    description: "适合入门研究者",
    color: "from-blue-500/40 to-blue-400",
    glow: "0 0 20px rgba(59,130,246,0.3)",
    badge: "推荐",
    features: [
      "每月 50 次实验",
      "每月 200 次 AI 对话",
      "10GB 数据存储",
      "导出 CSV / JSON",
      "邮件支持",
    ],
  },
  {
    value: "pro",
    label: "专业版",
    priceMonthly: 99,
    description: "适合科研团队",
    color: "from-orange-500/40 to-rose-400",
    glow: "0 0 20px rgba(139,92,246,0.3)",
    badge: "热门",
    features: [
      "无限次实验",
      "每月 1000 次 AI 对话",
      "50GB 数据存储",
      "导出 CSV / JSON / Excel",
      "优先技术支持",
      "自定义实验模板",
    ],
  },
  {
    value: "ultimate",
    label: "旗舰版",
    priceMonthly: 299,
    description: "适合企业级应用",
    color: "from-amber-500/40 to-amber-400",
    glow: "0 0 20px rgba(245,158,11,0.3)",
    badge: "尊享",
    features: [
      "无限次实验",
      "无限 AI 对话",
      "500GB 数据存储",
      "全格式导出 + API",
      "7×24 专属支持",
      "自定义模型接入",
      "团队协作空间",
    ],
  },
];

const COMPARISON_FEATURES = [
  { key: "实验次数", free: "10/月", basic: "50/月", pro: "无限", ultimate: "无限" },
  { key: "AI 对话", free: "50/月", basic: "200/月", pro: "1000/月", ultimate: "无限" },
  { key: "数据存储", free: "1GB", basic: "10GB", pro: "50GB", ultimate: "500GB" },
  { key: "导出格式", free: "CSV", basic: "CSV, JSON", pro: "CSV, JSON, Excel", ultimate: "全格式 + API" },
  { key: "技术支持", free: "社区", basic: "邮件", pro: "优先", ultimate: "7×24 专属" },
  { key: "自定义模板", free: "—", basic: "—", pro: "支持", ultimate: "支持" },
  { key: "团队协作", free: "—", basic: "—", pro: "—", ultimate: "支持" },
];

/* ───── 步骤类型 ───── */

type Step = "select" | "payment" | "processing" | "success";

/* ───── 主组件 ───── */

export default function PricingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectTier = searchParams.get("tier");

  const [step, setStep] = useState<Step>("select");
  const [selectedTier, setSelectedTier] = useState<string>("free");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [paymentMethod, setPaymentMethod] = useState<"wechat" | "alipay">("wechat");

  /* 根据 URL 参数预选 */
  useEffect(() => {
    if (preselectTier && TIERS.some((t) => t.value === preselectTier)) {
      setSelectedTier(preselectTier);
    }
  }, [preselectTier]);

  const tier = TIERS.find((t) => t.value === selectedTier)!;

  const getPrice = useCallback(
    (t: TierData) => {
      if (t.priceMonthly === 0) return 0;
      if (billingCycle === "yearly") return Math.round(t.priceMonthly * 10);
      return t.priceMonthly;
    },
    [billingCycle]
  );

  const handlePay = () => {
    setStep("processing");
    setTimeout(() => {
      setStep("success");
    }, 2500);
  };

  /* ───── 步骤 1：选择等级 ───── */

  const SelectStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl mx-auto"
    >
      {/* 标题 */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm text-muted-foreground mb-4"
        >
          <Crown className="w-4 h-4 text-amber-400" />
          <span>升级会员，解锁全部能力</span>
        </motion.div>
        <h1 className="text-3xl font-bold text-foreground mb-3">选择适合您的方案</h1>
        <p className="text-muted-foreground text-sm">灵活的定价，满足不同阶段的研究需求</p>
      </div>

      {/* 月/年切换 */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
            billingCycle === "monthly"
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          月付
        </button>
        <button
          onClick={() => setBillingCycle("yearly")}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
            billingCycle === "yearly"
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          年付
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
            省 17%
          </span>
        </button>
      </div>

      {/* 会员卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {TIERS.map((t, i) => {
          const isActive = selectedTier === t.value;
          const price = getPrice(t);
          return (
            <motion.div
              key={t.value}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              onClick={() => setSelectedTier(t.value)}
              className={`relative rounded-2xl p-5 cursor-pointer transition-all duration-300 border ${
                isActive
                  ? "border-gray-300 dark:border-white/15 bg-gray-50 dark:bg-white/[0.06]"
                  : "border-gray-200 dark:border-white/[0.04] bg-white dark:bg-white/[0.02] hover:border-gray-300 dark:hover:border-white/8 hover:bg-gray-50 dark:hover:bg-white/[0.04]"
              }`}
              style={
                isActive
                  ? {
                      boxShadow: t.glow,
                      background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
                    }
                  : undefined
              }
            >
              {t.badge && (
                <span className="absolute -top-2 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white">
                  {t.badge}
                </span>
              )}

              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all ${
                    isActive
                      ? "border-gray-900 dark:border-white bg-gray-900 dark:bg-white scale-110"
                      : "border-gray-300 dark:border-white/20"
                  }`}
                />
                <h3 className="text-gray-900 dark:text-white font-semibold text-sm">{t.label}</h3>
              </div>

              <div className="mb-3">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {price === 0 ? "免费" : `¥${price}`}
                </span>
                {price > 0 && (
                  <span className="text-gray-400 dark:text-white/30 text-xs ml-1">
                    /{billingCycle === "yearly" ? "年" : "月"}
                  </span>
                )}
              </div>

              <p className="text-gray-400 dark:text-white/35 text-xs mb-4">{t.description}</p>

              <ul className="space-y-2">
                {t.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-xs">
                    <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-white/50">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* 功能对比表 */}
      <div className="rounded-2xl border border-gray-200 dark:border-white/[0.04] bg-white dark:bg-white/[0.02] overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-white/[0.04]">
          <h3 className="text-gray-900 dark:text-white font-semibold text-sm flex items-center gap-2">
            <Shield className="w-4 h-4 text-gray-400 dark:text-white/40" />
            功能对比
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/[0.04]">
                <th className="text-left px-6 py-3 text-gray-400 dark:text-white/30 font-medium w-40">功能</th>
                <th className="text-center px-4 py-3 text-gray-400 dark:text-white/30 font-medium">免费版</th>
                <th className="text-center px-4 py-3 text-gray-400 dark:text-white/30 font-medium">基础版</th>
                <th className="text-center px-4 py-3 text-gray-400 dark:text-white/30 font-medium">专业版</th>
                <th className="text-center px-4 py-3 text-gray-400 dark:text-white/30 font-medium">旗舰版</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 dark:border-white/[0.03] ${
                    i % 2 === 0 ? "bg-gray-50 dark:bg-white/[0.01]" : ""
                  }`}
                >
                  <td className="px-6 py-2.5 text-gray-600 dark:text-white/50">{row.key}</td>
                  <td className="text-center px-4 py-2.5 text-gray-400 dark:text-white/30">{row.free}</td>
                  <td className="text-center px-4 py-2.5 text-gray-400 dark:text-white/30">{row.basic}</td>
                  <td className="text-center px-4 py-2.5 text-gray-400 dark:text-white/30">{row.pro}</td>
                  <td className="text-center px-4 py-2.5 text-gray-400 dark:text-white/30">{row.ultimate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 支付按钮 */}
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            if (selectedTier === "free") {
              router.push("/chat");
            } else {
              setStep("payment");
            }
          }}
          className={`px-10 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
            selectedTier === "free"
              ? "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40 border border-gray-200 dark:border-white/[0.06]"
              : "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-white/90 shadow-lg shadow-gray-300 dark:shadow-white/10"
          }`}
        >
          {selectedTier === "free" ? (
            <>
              免费版已选中 <ArrowRight className="w-4 h-4" />
            </>
          ) : (
            <>
              立即支付 ¥{getPrice(tier)}
              <Zap className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );

  /* ───── 步骤 2：支付方式 ───── */

  const PaymentStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">确认订单</h2>
        <p className="text-gray-500 dark:text-white/40 text-sm">请确认您的会员方案并选择支付方式</p>
      </div>

      {/* 订单摘要 */}
      <div className="rounded-2xl border border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-white/[0.03] p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-gray-900 dark:text-white font-semibold">{tier.label}</span>
            <span className="text-gray-400 dark:text-white/30 text-xs ml-2">
              {billingCycle === "yearly" ? "年付" : "月付"}
            </span>
          </div>
          <span className="text-gray-900 dark:text-white font-bold text-lg">¥{getPrice(tier)}</span>
        </div>
        <div className="border-t border-gray-200 dark:border-white/[0.04] pt-3 flex items-center justify-between text-sm">
          <span className="text-gray-400 dark:text-white/30">应付金额</span>
          <span className="text-gray-900 dark:text-white font-bold text-lg">¥{getPrice(tier)}</span>
        </div>
      </div>

      {/* 支付方式 */}
      <div className="mb-6">
        <h3 className="text-gray-600 dark:text-white/50 text-xs font-medium mb-3 uppercase tracking-wider">
          选择支付方式
        </h3>
        <div className="space-y-3">
          {[
            { id: "wechat" as const, label: "微信支付", icon: "💚", color: "#22c55e" },
            { id: "alipay" as const, label: "支付宝", icon: "💙", color: "#3b82f6" },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setPaymentMethod(m.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all ${
                paymentMethod === m.id
                  ? "border-gray-300 dark:border-white/15 bg-gray-50 dark:bg-white/[0.06]"
                  : "border-gray-200 dark:border-white/[0.04] bg-white dark:bg-white/[0.02] hover:border-gray-300 dark:hover:border-white/8"
              }`}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                style={{ background: `${m.color}15` }}
              >
                {m.id === "wechat" ? (
                  <MessageCircle className="w-5 h-5" style={{ color: m.color }} />
                ) : (
                  <CreditCard className="w-5 h-5" style={{ color: m.color }} />
                )}
              </div>
              <span className="text-gray-900 dark:text-white text-sm font-medium flex-1 text-left">
                {m.label}
              </span>
              <div
                className={`w-4 h-4 rounded-full border-2 transition-all ${
                  paymentMethod === m.id
                    ? "border-gray-900 dark:border-white bg-gray-900 dark:bg-white"
                    : "border-gray-300 dark:border-white/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* 按钮 */}
      <div className="flex gap-3">
        <button
          onClick={() => setStep("select")}
          className="flex-1 py-3 rounded-xl border border-gray-200 dark:border-white/[0.06] text-gray-500 dark:text-white/50 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all"
        >
          返回
        </button>
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handlePay}
          className="flex-[2] py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-white/90 transition-all shadow-lg shadow-gray-300 dark:shadow-white/10 flex items-center justify-center gap-2"
        >
          <Smartphone className="w-4 h-4" />
          确认支付 ¥{getPrice(tier)}
        </motion.button>
      </div>
    </motion.div>
  );

  /* ───── 步骤 3：支付处理中 ───── */

  const ProcessingStep = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        className="mb-6"
      >
        <Loader2 className="w-12 h-12 text-gray-400 dark:text-white/30" />
      </motion.div>
      <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">正在处理支付...</h3>
      <p className="text-gray-400 dark:text-white/30 text-sm">请稍候，正在连接支付网关</p>
      <div className="mt-6 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-white/40"
          />
        ))}
      </div>
    </motion.div>
  );

  /* ───── 步骤 4：支付成功 ───── */

  const SuccessStep = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6"
      >
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Check className="w-10 h-10 text-emerald-400" strokeWidth={3} />
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
      >
        支付成功！
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-gray-500 dark:text-white/40 text-sm mb-2"
      >
        恭喜您已成为 <span className="text-gray-900 dark:text-white font-semibold">{tier.label}</span> 会员
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="text-gray-300 dark:text-white/25 text-xs mb-8"
      >
        所有权益已立即生效
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
      >
        <Link href="/chat">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-white/90 transition-all shadow-lg shadow-gray-300 dark:shadow-white/10 flex items-center gap-2"
          >
            返回聊天
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );

  /* ───── 页面外壳 ───── */

  return (
    <main className="min-h-screen bg-background text-foreground overflow-auto">
      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* 顶部导航 */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
          <Link href="/chat">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all text-sm">
              <ArrowLeft className="w-4 h-4" />
              <span>返回</span>
            </button>
          </Link>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400/60" />
            <span className="text-gray-600 dark:text-white/50 text-xs font-medium">NovaMat AI</span>
          </div>
        </header>

        {/* 内容区 */}
        <div className="px-6 py-8">
          <AnimatePresence mode="wait">
            {step === "select" && <SelectStep key="select" />}
            {step === "payment" && <PaymentStep key="payment" />}
            {step === "processing" && <ProcessingStep key="processing" />}
            {step === "success" && <SuccessStep key="success" />}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
