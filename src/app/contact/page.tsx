import { Metadata } from "next";
import PageLayout from "../page-layout";

export const metadata: Metadata = {
  title: "联系方式 - NovaMat AI",
  description: "联系 NovaMat AI 团队",
};

export default function ContactPage() {
  return (
    <PageLayout title="联系方式" description="我们期待与您的沟通">
      <div className="space-y-8">
        <section className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">联系信息</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">邮箱</h3>
                <p className="text-gray-600 dark:text-gray-400">a2778462077@foxmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">电话</h3>
                <p className="text-gray-600 dark:text-gray-400">13075244743</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">地址</h3>
                <p className="text-gray-600 dark:text-gray-400">广东 肇庆</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">工作时间</h2>
          <div className="bg-gray-50 dark:bg-gray-900/20 p-6 rounded-lg">
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>周一至周五：</strong>9:00 - 18:00</p>
              <p><strong>周六、周日：</strong>休息</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                * 节假日安排另行通知
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">社交媒体</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="#" className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💬</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
                    微信公众号
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">关注获取最新动态</p>
                </div>
              </div>
            </a>
            <a href="#" className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📺</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
                    哔哩哔哩
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">观看教程视频</p>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">技术支持</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            如需技术支持，请通过以下方式联系我们：
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• 发送邮件至：<strong>a2778462077@foxmail.com</strong></li>
            <li>• 拨打客服电话：<strong>13075244743</strong></li>
            <li>• 我们将在 24 小时内回复您的问题</li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}