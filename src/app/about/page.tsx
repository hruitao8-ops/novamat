import { Metadata } from "next";
import PageLayout from "../page-layout";

export const metadata: Metadata = {
  title: "公司介绍 - NovaMat AI",
  description: "关于 NovaMat AI 公司介绍",
};

export default function AboutPage() {
  return (
    <PageLayout title="公司介绍" description="AI 驱动的材料科学创新">
      <div className="space-y-8">
        <section className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">我们的使命</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            NovaMat AI 致力于将人工智能技术与材料科学深度融合，为科研人员提供高效、智能的虚拟仿真实验平台。
            我们希望通过技术创新，降低科研门槛，加速材料科学研究的进程，为人类的科技进步贡献力量。
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">我们的愿景</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">精准</h3>
              <p className="text-gray-600 dark:text-gray-400">
                提供高精度的仿真模拟，确保实验结果的可靠性
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">高效</h3>
              <p className="text-gray-600 dark:text-gray-400">
                通过AI辅助，大幅提升科研效率和创新能力
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">开放</h3>
              <p className="text-gray-600 dark:text-gray-400">
                构建开放的科研协作平台，促进知识共享
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">发展历程</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="text-violet-600 dark:text-violet-400 font-bold text-lg min-w-[100px]">2026年</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">平台正式上线</h3>
                <p className="text-gray-600 dark:text-gray-400">NovaMat AI 虚拟仿真实验平台正式发布，为用户提供AI驱动的科研服务</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-violet-600 dark:text-violet-400 font-bold text-lg min-w-[100px]">2025年</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">技术研发</h3>
                <p className="text-gray-600 dark:text-gray-400">核心团队组建，开始AI与材料科学融合技术的研发工作</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900/20 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">联系我们</h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p><strong>邮箱：</strong>a2778462077@foxmail.com</p>
            <p><strong>电话：</strong>13075244743</p>
            <p><strong>地址：</strong>广东 肇庆</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}