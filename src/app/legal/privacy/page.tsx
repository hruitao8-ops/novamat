import { Metadata } from "next";
import LegalLayout from "../legal-layout";

export const metadata: Metadata = {
  title: "隐私政策 - NovaMat AI",
  description: "NovaMat AI 隐私政策说明",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="隐私政策" lastUpdate="2026年6月">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. 引言</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          NovaMat AI 虚拟仿真实验平台（以下简称"我们"）非常重视用户隐私保护。
          本隐私政策旨在向您说明我们如何收集、使用、存储、共享和保护您的个人信息。
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          请您仔细阅读本隐私政策。如果您不同意本政策的任何内容，请立即停止使用我们的服务。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. 我们收集的信息</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">2.1 您主动提供的信息</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>账户信息：用户名、邮箱地址、密码（加密存储）</li>
            <li>个人资料：姓名、头像、机构信息</li>
            <li>使用数据：实验记录、对话历史、分析数据</li>
            <li>支付信息：订单记录、支付凭证（不含银行卡号）</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">2.2 自动收集的信息</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>设备信息：设备型号、操作系统、浏览器类型</li>
            <li>日志信息：访问时间、访问页面、IP地址</li>
            <li>Cookie 信息：会话状态、用户偏好设置</li>
            <li>位置信息：大致地理位置（基于IP地址）</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. 信息的使用</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          我们收集的信息将用于以下目的：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>提供、维护和改进我们的服务</li>
          <li>处理您的订单和支付</li>
          <li>发送服务通知和更新信息</li>
          <li>个性化您的使用体验</li>
          <li>分析用户行为，改进产品设计</li>
          <li>保障账户安全，防止欺诈行为</li>
          <li>遵守法律法规的要求</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. 信息的存储</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            您的个人信息存储在位于中华人民共和国境内的服务器上。
            我们采取以下安全措施保护您的信息：
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>数据加密：使用 SSL/TLS 加密传输，密码使用不可逆加密存储</li>
            <li>访问控制：严格限制员工访问权限，记录访问日志</li>
            <li>安全审计：定期进行安全审计和漏洞扫描</li>
            <li>备份机制：定期备份数据，确保数据安全</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            我们将在以下情况下删除您的信息：
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>您主动注销账户后</li>
            <li>信息收集目的已实现且无需继续保存</li>
            <li>法律法规规定的保存期限届满</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. 信息的共享</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            我们不会向第三方出售您的个人信息。但在以下情况下，我们可能会共享您的信息：
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>经您事先同意</li>
            <li>与授权合作伙伴共享（如支付服务提供商、云服务提供商）</li>
            <li>法律法规要求或政府机关依法要求</li>
            <li>保护我们或用户的合法权益</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            我们要求所有合作伙伴遵守本隐私政策，并采取适当的安全措施。
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. 您的权利</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            您对您的个人信息享有以下权利：
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>访问权</strong>：您有权访问我们持有的您的个人信息</li>
            <li><strong>更正权</strong>：您有权更正不准确或不完整的个人信息</li>
            <li><strong>删除权</strong>：您有权要求删除您的个人信息</li>
            <li><strong>导出权</strong>：您有权导出您的个人信息</li>
            <li><strong>撤回同意权</strong>：您有权撤回之前给予的同意</li>
            <li><strong>注销账户权</strong>：您有权注销您的账户</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            您可以通过账户设置或联系我们行使上述权利。
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Cookie 的使用</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          我们使用 Cookie 和类似技术来：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>保持您的登录状态</li>
          <li>记住您的偏好设置</li>
          <li>分析网站使用情况</li>
          <li>提供个性化内容</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          您可以通过浏览器设置管理 Cookie。但请注意，禁用某些 Cookie 可能影响网站功能。
          详见我们的 <a href="/legal/cookies" className="text-violet-600 hover:underline">Cookie 政策</a>。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. 儿童隐私保护</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          我们的服务面向成年用户。我们不会故意收集 18 岁以下儿童的个人信息。
          如果您发现我们无意中收集了儿童的个人信息，请联系我们，我们将尽快删除相关信息。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. 隐私政策的更新</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          我们可能会不时更新本隐私政策。更新后的政策将在本页面发布，
          并更新"最后更新时间"。重大变更时，我们会通过邮件或站内信通知您。
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          建议您定期查看本政策，了解我们如何保护您的隐私。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">10. 联系我们</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          如果您对本隐私政策有任何疑问、意见或请求，请通过以下方式联系我们：
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-2">
          <p className="text-gray-700 dark:text-gray-300"><strong>邮箱：</strong>a2778462077@foxmail.com</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>电话：</strong>13075244743</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>地址：</strong>广东 肇庆</p>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          我们将在 15 个工作日内回复您的请求。
        </p>
      </section>
    </LegalLayout>
  );
}