"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search } from 'lucide-react';
import FuzzyText from '@/components/ui/fuzzy-text';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative overflow-hidden">
      {/* 黑屏淡出 */}
      {mounted && (
        <motion.div
          className="fixed inset-0 z-50 bg-black pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onAnimationComplete={() => null}
        />
      )}

      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-violet-600/[0.06] blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, -20, 10, 0], y: [0, 15, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[15%] right-[20%] w-[350px] h-[350px] rounded-full bg-blue-600/[0.05] blur-[120px]"
        />
        {/* 网格 */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* 内容 */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* 404 模糊文字 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative"
        >
          {/* 文字后面的发光 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-24 rounded-full bg-violet-500/[0.12] blur-3xl" />
          </div>
          <FuzzyText
            fontSize="clamp(5rem, 15vw, 12rem)"
            fontWeight={900}
            baseIntensity={0.25}
            hoverIntensity={0.6}
            enableHover
            clickEffect
            glitchMode
            glitchInterval={3000}
            glitchDuration={250}
            fuzzRange={8}
            direction="both"
            gradient={['#8b5cf6', '#6366f1', '#3b82f6']}
            letterSpacing={8}
            className="relative"
          >
            404
          </FuzzyText>
        </motion.div>

        {/* 描述文字 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center space-y-3"
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white/90 tracking-tight">
            页面未找到
          </h1>
          <p className="text-sm text-gray-400 dark:text-white/30 max-w-sm leading-relaxed">
            你访问的页面可能已被移除、名称已更改，或暂时不可用。
          </p>
        </motion.div>

        {/* 操作按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex items-center gap-3 mt-2"
        >
          <Link href="/">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-[#0A0A0B] text-sm font-semibold hover:bg-gray-800 dark:hover:bg-white/90 transition-colors shadow-lg shadow-gray-500/10 dark:shadow-white/[0.05]"
            >
              <Home className="w-4 h-4" />
              返回首页
            </motion.button>
          </Link>
          <Link href="/chat">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-gray-100 dark:bg-white/[0.03] text-gray-500 dark:text-white/60 text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/[0.06] hover:text-gray-900 dark:hover:text-white/80 hover:border-gray-300 dark:hover:border-white/[0.12] transition-all"
            >
              <Search className="w-4 h-4" />
              开始对话
            </motion.button>
          </Link>
        </motion.div>

        {/* 返回提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-2 text-gray-300 dark:text-white/15 text-xs"
        >
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center gap-1.5 hover:text-gray-500 dark:hover:text-white/30 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>或返回上一页</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
