"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, FlaskConical, BarChart3, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900/20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>AI 驱动的材料科学研究平台</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            NovaMat AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12"
          >
            虚拟仿真实验平台 — 让材料科学研究更智能、更高效
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/chat">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span>开始体验</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/features">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-lg font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span>了解更多</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "AI 智能对话",
      description: "基于先进的大语言模型，提供智能对话与实验辅助服务",
      items: ["自然语言交互", "实验方案建议", "数据分析指导", "知识问答系统"],
      gradient: "from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20",
    },
    {
      icon: FlaskConical,
      title: "虚拟仿真实验",
      description: "高保真虚拟实验环境，支持多种材料科学实验模拟",
      items: ["3D 可视化展示", "实时数据反馈", "多参数调控", "实验报告生成"],
      gradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      icon: BarChart3,
      title: "数据分析与可视化",
      description: "强大的数据处理能力，支持多维度分析与可视化展示",
      items: ["自动数据清洗", "统计分析工具", "交互式图表", "结果导出功能"],
      gradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    },
    {
      icon: Shield,
      title: "安全与隐私",
      description: "企业级安全防护，保障您的数据安全与隐私",
      items: ["数据加密存储", "访问权限控制", "操作日志记录", "合规性保障"],
      gradient: "from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
    },
  ];

  return (
    <section className="relative bg-white dark:bg-black py-24 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            核心功能
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            探索 NovaMat AI 的强大功能，助力您的材料科学研究
          </p>
        </motion.div>

        {/* 功能卡片 */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-2xl border border-gray-100 dark:border-white/5`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white dark:bg-black rounded-xl shadow-sm">
                    <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 ml-1">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-violet-600 dark:text-violet-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}