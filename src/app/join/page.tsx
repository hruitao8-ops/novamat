import { Metadata } from "next";
import PageLayout from "../page-layout";

export const metadata: Metadata = {
  title: "加入我们 - NovaMat AI",
  description: "加入 NovaMat AI 团队",
};

export default function JoinPage() {
  return (
    <PageLayout title="加入我们" description="与优秀的人一起创造未来">
      <div className="space-y-8">
        <section className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">为什么选择我们？</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">前沿技术</h3>
                <p className="text-gray-600 dark:text-gray-400">接触最新的AI和材料科学融合技术</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">创新环境</h3>
                <p className="text-gray-600 dark:text-gray-400">鼓励创新，支持尝试新想法</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">优秀团队</h3>
                <p className="text-gray-600 dark:text-gray-400">与来自顶尖机构的专家共事</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">成长空间</h3>
                <p className="text-gray-600 dark:text-gray-400">完善的培训体系和晋升通道</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">开放职位</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-violet-500 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">前端开发工程师</h3>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                  招聘中
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                负责产品前端开发，要求熟悉 React、TypeScript、Next.js
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-600 dark:text-gray-400">React</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-600 dark:text-gray-400">TypeScript</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-600 dark:text-gray-400">Next.js</span>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-violet-500 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI 算法工程师</h3>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                  招聘中
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                负责AI模型研发和优化，要求熟悉深度学习、NLP
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-600 dark:text-gray-400">Python</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-600 dark:text-gray-400">PyTorch</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-600 dark:text-gray-400">NLP</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900/20 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">投递简历</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            请将简历发送至：<strong>a2778462077@foxmail.com</strong>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            邮件标题格式：应聘职位 - 姓名 - 学校/公司
          </p>
        </section>
      </div>
    </PageLayout>
  );
}