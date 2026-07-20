import { Metadata } from "next";
import PageLayout from "../page-layout";

export const metadata: Metadata = {
  title: "常见问题 - NovaMat AI",
  description: "NovaMat AI 常见问题解答",
};

export default function FAQPage() {
  return (
    <PageLayout title="常见问题" description="快速找到答案">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">账户相关</h2>
          <div className="space-y-3">
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                如何注册账户？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                点击页面右上角的"登录注册"按钮，在注册页面填写邮箱和密码即可完成注册。
              </div>
            </details>
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                忘记密码怎么办？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                在登录页面点击"忘记密码"，输入注册邮箱，系统将发送重置密码链接。
              </div>
            </details>
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                如何修改个人信息？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                登录后进入"个人中心"，可以修改头像、昵称等个人信息。
              </div>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">功能使用</h2>
          <div className="space-y-3">
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                AI 对话有什么功能？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                AI 对话支持：实验方案咨询、数据分析指导、知识问答、操作建议等。
              </div>
            </details>
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                如何创建虚拟实验？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                点击"新建实验"，选择实验类型（如材料合成、性能测试等），设置参数后即可开始仿真。
              </div>
            </details>
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                实验数据如何导出？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                在实验结果页面，点击"导出"按钮，支持 PDF8 PDF、Excel、CSV 等多种格式。
              </div>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">技术支持</h2>
          <div className="space-y-3">
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                遇到技术问题怎么办？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                您可以通过以下方式获取帮助：
                <br />• 查看使用文档
                <br />• 联系在线客服
                <br />• 发送邮件至：a2778462077@foxmail.com
                <br />• 拨打电话：13075244743
              </div>
            </details>
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                支持哪些浏览器？
              </summary>
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                支持 Chrome、Firefox、Safari、Edge 等主流浏览器的最新版本。建议使用 Chrome 获得最佳体验。
              </div>
            </details>
          </div>
        </section>

        <section className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">没有找到答案？</h2>
          <p className="text-gray-700 dark:text-gray-300">
            联系我们：a2778462077@foxmail.com | 13075244743
          </p>
        </section>
      </div>
    </PageLayout>
  );
}