import { Metadata } from "next";
import PageLayout from "../page-layout";

export const metadata: Metadata = {
  title: "在线客服 - NovaMat AI",
  description: "NovaMat AI 在线客服支持",
};

export default function SupportPage() {
  return (
    <PageLayout title="在线客服" description="我们随时为您服务">
      <div className="space-y-8">
        <section className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 p-8 rounded-xl text-center">
          <div className="text-6xl mb-4">💬</div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            欢迎联系客服
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            我们的客服团队随时准备为您提供帮助
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>客服在线</span>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">联系方式</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">邮件支持</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                发送邮件至：
              </p>
              <p className="text-violet-600 dark:text-violet-400 font-medium">
                a2778462077@foxmail.com
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                工作日 24 小时内回复
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">电话支持</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                拨打客服电话：
              </p>
              <p className="text-violet-600 dark:text-violet-400 font-medium">
                13075244743
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                工作日 9:00-18:00
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">服务时间</h2>
          <div className="bg-gray-50 dark:bg-gray-900/20 p-6 rounded-lg">
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>周一至周五</span>
                <span className="font-medium">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>周六、周日</span>
                <span className="font-medium text-gray-500">休息</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 pt-3 border-t border-gray-200 dark:border-gray-700">
                * 节假日安排另行通知，邮件支持全年无休
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">常见问题快速解答</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">账户问题</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                注册、登录、密码重置等账户相关问题
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">功能使用</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AI 对话、虚拟实验、数据分析等功能
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">技术支持</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                浏览器兼容、性能优化等技术问题
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">其他问题</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                建议反馈、合作咨询等其他问题
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">提交反馈</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            您的反馈对我们非常重要
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            请发送邮件至：<strong>a2778462077@foxmail.com</strong>
          </p>
        </section>
      </div>
    </PageLayout>
  );
}