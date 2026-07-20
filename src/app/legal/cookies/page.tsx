import { Metadata } from "next";
import LegalLayout from "../legal-layout";

export const metadata: Metadata = {
  title: "Cookie 政策 - NovaMat AI",
  description: "NovaMat AI Cookie 使用政策说明",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie 政策" lastUpdate="2026年6月">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. 什么是 Cookie</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Cookie 是网站存储在您设备上的小型文本文件。它们被广泛用于使网站正常工作、
          提高效率以及向网站所有者提供信息。
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          本政策说明 NovaMat AI 如何使用 Cookie 及类似技术，以及您如何管理这些技术。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. 我们使用的 Cookie 类型</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.1 必要 Cookie（必需）
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              这些 Cookie 对于网站的正常运行是必需的。没有这些 Cookie，网站无法正常工作。
              它们通常在您访问网站时自动设置，并在您关闭浏览器时删除。
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3">Cookie 名称</th>
                    <th className="text-left py-2 px-3">用途</th>
                    <th className="text-left py-2 px-3">有效期</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3">session_id</td>
                    <td className="py-2 px-3">用户会话管理</td>
                    <td className="py-2 px-3">会话结束</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3">csrf_token</td>
                    <td className="py-2 px-3">安全防护</td>
                    <td className="py-2 px-3">会话结束</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">auth_token</td>
                    <td className="py-2 px-3">身份验证</td>
                    <td className="py-2 px-3">7天</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.2 功能 Cookie（可选）
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              这些 Cookie 使网站能够记住您的选择（如语言、主题），并提供增强的功能和个性化内容。
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3">Cookie 名称</th>
                    <th className="text-left py-2 px-3">用途</th>
                    <th className="text-left py-2 px-3">有效期</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3">theme</td>
                    <td className="py-2 px-3">记住主题偏好（深色/浅色）</td>
                    <td className="py-2 px-3">1年</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3">language</td>
                    <td className="py-2 px-3">记住语言偏好</td>
                    <td className="py-2 px-3">1年</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">preferences</td>
                    <td className="py-2 px-3">用户界面偏好设置</td>
                    <td className="py-2 px-3">6个月</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.3 分析 Cookie（可选）
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              这些 Cookie 帮助我们了解用户如何使用网站，以便改进网站性能和用户体验。
              收集的信息是匿名的，不包含个人身份信息。
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3">Cookie 名称</th>
                    <th className="text-left py-2 px-3">用途</th>
                    <th className="text-left py-2 px-3">有效期</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3">_ga</td>
                    <td className="py-2 px-3">Google Analytics - 区分用户</td>
                    <td className="py-2 px-3">2年</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3">_gid</td>
                    <td className="py-2 px-3">Google Analytics - 区分用户会话</td>
                    <td className="py-2 px-3">24小时</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">_gat</td>
                    <td className="py-2 px-3">Google Analytics - 限制请求速率</td>
                    <td className="py-2 px-3">1分钟</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.4 营销 Cookie（可选）
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              这些 Cookie 用于跟踪访问者跨网站的访问，用于展示相关广告。
              我们目前不使用营销 Cookie。
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. 如何管理 Cookie</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3.1 浏览器设置</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            您可以通过浏览器设置管理或删除 Cookie。大多数浏览器允许您：
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>查看已存储的 Cookie</li>
            <li>允许或阻止所有 Cookie</li>
            <li>删除所有 Cookie</li>
            <li>阻止特定网站的 Cookie</li>
            <li>设置规则在关闭浏览器时自动删除 Cookie</li>
          </ul>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>注意：</strong>禁用必要 Cookie 可能导致网站无法正常工作。
              建议只禁用非必要的功能 Cookie 和分析 Cookie。
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">3.2 常见浏览器管理方法</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Chrome</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                设置 → 隐私和安全 → Cookie 和其他网站数据
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Firefox</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                设置 → 隐私与安全 → Cookie 和网站数据
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Safari</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                偏好设置 → 隐私 → Cookie 和网站数据
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Edge</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                设置 → Cookie 和网站权限 → Cookie 和网站数据
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. 其他跟踪技术</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">4.1 本地存储</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            我们使用 HTML5 本地存储（localStorage 和 sessionStorage）来存储用户偏好和临时数据。
            这些数据存储在您的设备上，不会发送到服务器。
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">4.2 像素标签</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            我们可能在邮件中使用像素标签（又称网络信标）来跟踪邮件打开情况。
            这有助于我们改进邮件内容和发送策略。
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Cookie 政策的更新</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          我们可能会不时更新本 Cookie 政策。更新后的政策将在本页面发布，
          并更新"最后更新时间"。建议您定期查看本政策。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. 联系我们</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          如果您对本 Cookie 政策有任何疑问，请联系我们：
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-2">
          <p className="text-gray-700 dark:text-gray-300"><strong>邮箱：</strong>a2778462077@foxmail.com</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>电话：</strong>13075244743</p>
        </div>
      </section>
    </LegalLayout>
  );
}