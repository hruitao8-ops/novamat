import { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../page-layout";

export const metadata: Metadata = {
  title: "帮助中心 - NovaMat AI",
  description: "NovaMat AI 帮助中心",
};

export default function HelpPage() {
  return (
    <PageLayout title="帮助中心" description="快速找到您需要的帮助">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">快速导航</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/docs" className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 transition-colors group">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 mb-2">
                使用文档
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">详细的使用指南</p>
            </Link>
            <Link href="/faq" className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 transition-colors group">
              <div className="text-4xl mb-3">❓</div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 mb-2">
                常见问题
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">快速解答疑问</p>
            </Link>
            <Link href="/support" className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 transition-colors group">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 mb-2">
                在线客服
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">实时在线支持</p>
            </Link>
            <Link href="/contact" className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 transition-colors group">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 mb-2">
                联系我们
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">获取联系方式</p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">热门主题</h2>
          <div className="space-y-3">
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                如何开始使用 NovaMat AI？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                <p>1. 注册账户并登录</p>
                <p>2. 进入 AI 对话页面开始交互</p>
                <p>3. 或创建新的虚拟仿真实验</p>
              </div>
            </details>
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                如何创建虚拟实验？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                <p>1. 点击"新建实验"按钮</p>
                <p>2. 选择实验类型和参数</p>
                <p>3. 开始仿真并查看结果</p>
              </div>
            </details>
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                数据如何导出？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                <p>在实验结果页面，点击"导出"按钮，支持 PDF、Excel 等格式</p>
              </div>
            </details>
          </div>
        </section>

        <section className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">需要更多帮助？</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            如果以上内容未能解决您的问题，请联系我们的客服团队：
          </p>
          <div className="space-y-2 text-gray-600 dark:text-gray-400">
            <p>📧 邮箱：a2778462077@foxmail.com</p>
            <p>📞 电话：13075244743</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}