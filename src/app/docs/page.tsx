import { Metadata } from "next";
import PageLayout from "../page-layout";

export const metadata: Metadata = {
  title: "使用文档 - NovaMat AI",
  description: "NovaMat AI 使用文档",
};

export default function DocsPage() {
  return (
    <PageLayout title="使用文档" description="详细的使用指南和教程">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">快速开始</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-violet-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">1. 注册账户</h3>
              <p className="text-gray-600 dark:text-gray-400">
                访问注册页面，填写邮箱和密码完成注册。注册成功后即可登录使用。
              </p>
            </div>
            <div className="border-l-4 border-violet-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2. 开始对话</h3>
              <p className="text-gray-600 dark:text-gray-400">
                进入 AI 对话页面，输入您的问题或需求，AI 将为您提供智能回复和实验建议。
              </p>
            </div>
            <div className="border-l-4 border-violet-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">3. 创建实验</h3>
              <p className="text-gray-600 dark:text-gray-400">
                点击"新建实验"，选择实验类型，设置参数，开始虚拟仿真实验。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">功能模块</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🤖 AI 对话</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 自然语言交互</li>
                <li>• 实验方案建议</li>
                <li>• 数据分析指导</li>
                <li>• 知识问答</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔬 虚拟实验</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 多种实验类型</li>
                <li>• 参数自定义</li>
                <li>• 实时可视化</li>
                <li>• 结果导出</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">📊 数据分析</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 自动数据处理</li>
                <li>• 统计分析</li>
                <li>• 图表生成</li>
                <li>• 报告导出</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">👤 个人中心</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 账户管理</li>
                <li>• 实验历史</li>
                <li>• 数据收藏</li>
                <li>• 偏好设置</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">技术支持</h2>
          <p className="text-gray-700 dark:text-gray-300">
            如有问题，请联系：a2778462077@foxmail.com 或拨打 13075244743
          </p>
        </section>
      </div>
    </PageLayout>
  );
}