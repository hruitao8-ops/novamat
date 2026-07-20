import { Metadata } from "next";
import PageLayout from "../page-layout";

export const metadata: Metadata = {
  title: "更新日志 - NovaMat AI",
  description: "NovaMat AI 版本更新记录",
};

export default function ChangelogPage() {
  return (
    <PageLayout title="更新日志" description="查看产品最新动态">
      <div className="space-y-12">
        {/* Version 1.0.0 */}
        <div className="border-l-4 border-violet-500 pl-6">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">v1.0.0</h3>
            <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium">
              最新版本
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">2026年6月</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✨</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">新功能</p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• AI 智能对话系统上线</li>
                  <li>• 虚拟仿真实验平台发布</li>
                  <li>• 数据分析与可视化功能</li>
                  <li>• 用户认证与权限管理</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">🎨</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">界面优化</p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• 全新首页设计</li>
                  <li>• 深色模式支持</li>
                  <li>• 响应式布局优化</li>
                  <li>• 动画效果增强</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Version 0.9.0 */}
        <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">v0.9.0</h3>
            <span className="text-gray-500 dark:text-gray-400 text-sm">2026年5月</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-yellow-500 font-bold">🔧</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">问题修复</p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• 修复页面刷新滚动问题</li>
                  <li>• 优化图片加载性能</li>
                  <li>• 改进移动端体验</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Version 0.8.0 */}
        <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">v0.8.0</h3>
            <span className="text-gray-500 dark:text-gray-400 text-sm">2026年4月</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">🎨</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">设计改进</p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• 登录注册界面重新设计</li>
                  <li>• Logo 品牌升级</li>
                  <li>• 配色方案优化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}