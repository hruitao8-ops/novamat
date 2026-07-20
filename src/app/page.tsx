"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, LogIn } from "lucide-react";
import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";
import TrueFocus from "@/components/ui/true-focus";
import RotatingText from "@/components/ui/rotating-text";
import StaggeredMenu from "@/components/ui/staggered-menu";
import BeijingClock from "@/components/ui/beijing-clock";
import { Footer7 } from "@/components/ui/footer-7";
import TeamShowcase from "@/components/ui/team-showcase";
import { teamSectionConfig } from "@/config/team.config";
import { useAuth } from "@/components/contexts/auth-context";
import { useScrollToTop } from "@/components/hooks/use-scroll-top";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [entered, setEntered] = useState(false);
  
  // 确保刷新后回到顶部
  useScrollToTop();

  const menuItems = [
    { label: 'AI 对话', ariaLabel: '进入 AI 对话页面', link: '/chat' },
    { label: '新建实验', ariaLabel: '创建新的仿真实验', onClick: () => router.push('/chat') },
    { label: '个人中心', ariaLabel: '查看个人中心', link: '/profile' },
    { label: '登录注册', ariaLabel: '登录或注册账户', link: '/auth' },
  ];

  // 页面加载后启动入场动画序列
  useEffect(() => {
    setEntered(true);
  }, []);

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section - 全屏展示，可滚动 */}
      <section className="relative w-screen h-screen overflow-hidden bg-white dark:bg-black">
        {/* 整体页面淡入遮罩 */}
        <AnimatePresence>
          {!entered && (
            <motion.div
              className="fixed inset-0 z-50 bg-white dark:bg-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* TrueFocus 副标题 — 逐字聚焦动画 */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="absolute top-[28%] left-0 right-0 text-center z-10"
        >
          <TrueFocus
            sentence="虚拟仿真实验平台"
            separator=""
            blurAmount={4}
            borderColor="#8b5cf6"
            glowColor="rgba(139, 92, 246, 0.5)"
            animationDuration={0.6}
            pauseBetweenAnimations={0.8}
            className="w-full [&_.focus-word]:text-xl [&_.focus-word]:font-light [&_.focus-word]:text-gray-900/60 dark:[&_.focus-word]:text-white/60 [&_.focus-word.active]:text-gray-900 dark:[&_.focus-word.active]:text-white [&_.focus-word]:!cursor-default [&_.focus-word]:!tracking-normal"
          />
        </motion.div>

        {/* 北京时间 — 右下角 */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="fixed bottom-5 right-7 z-30"
        >
          <BeijingClock />
        </motion.div>

        {/* 粒子文字 — 淡入，和副标题稍有先后 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <ParticleTextEffect
            text="NovaMat AI"
            className="absolute top-0 left-0"
            colors={['ff6b6b', 'feca57', '48dbfb', '1dd1a1']}
          />
        </motion.div>

        {/* 底部按钮区 */}
        <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-6 z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
              <Link href="/chat">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-[#0A0A0B] rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-white/90 transition-colors"
                >
                  <span>开始体验</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
              </Link>
          </motion.div>

          {/* 登录/注册入口（未登录时显示） */}
          {!isAuthenticated && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Link href="/auth">
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-gray-900/50 dark:text-white/50 text-sm font-medium border border-gray-200 dark:border-white/[0.08] bg-gray-100 dark:bg-white/[0.02] hover:bg-gray-200 dark:hover:bg-white/[0.06] hover:text-gray-900/80 dark:hover:text-white/80 transition-all"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>登录 / 注册</span>
                </button>
              </Link>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-gray-900/30 dark:text-white/30 text-xs tracking-wider"
          >
            <RotatingText
              texts={[
                'Powered by NovaMat AI Engine',
                'AI-Driven Material Science',
                'Virtual Simulation Lab',
                'Intelligent Data Analysis',
              ]}
              staggerFrom="last"
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
              mainClassName="justify-center"
            />
          </motion.div>
        </div>

        {/* StaggeredMenu — 全屏覆盖导航 */}
        <StaggeredMenu
          position="right"
          items={menuItems}
          colors={['#8b5cf6', '#6366f1', '#3b82f6']}
          displaySocials={false}
          displayItemNumbering={true}
          showLogo={false}
          menuButtonColor="rgba(255,255,255,0.6)"
          openMenuButtonColor="rgba(255,255,255,0.9)"
          accentColor="#8b5cf6"
          changeMenuColorOnOpen={true}
          closeOnClickAway={true}
        />
      </section>

      {/* Team Section - 团队展示（滚动后可见） */}
      <section className="relative bg-white dark:bg-black py-20 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/[0.03] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 px-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {teamSectionConfig.title}
            </h2>
            <p className="text-gray-600 dark:text-white/50 text-base md:text-lg max-w-2xl mx-auto">
              {teamSectionConfig.description}
            </p>
          </motion.div>

          {/* 团队展示组件 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <TeamShowcase members={teamSectionConfig.members} />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer7 />
    </div>
  );
}
