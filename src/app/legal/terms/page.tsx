import { Metadata } from "next";
import LegalLayout from "../legal-layout";

export const metadata: Metadata = {
  title: "用户协议 - NovaMat AI",
  description: "NovaMat AI 用户服务协议条款",
};

export default function TermsPage() {
  return (
    <LegalLayout title="用户服务协议" lastUpdate="2026年6月">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. 服务条款的接受</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          欢迎使用 NovaMat AI 虚拟仿真实验平台（以下简称"本平台"）。在使用本平台提供的各项服务之前，
          请您仔细阅读本用户服务协议（以下简称"本协议"）的全部内容。
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          您通过网络页面点击确认或以其他方式选择接受本协议，即表示您与本平台已达成协议，
          并同意接受本协议的全部约定内容。如果您不同意本协议的任何内容，请立即停止使用本平台提供的服务。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. 服务内容</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            本平台为用户提供以下服务：
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>AI 智能对话与实验辅助服务</li>
            <li>材料科学虚拟仿真实验环境</li>
            <li>数据分析与可视化工具</li>
            <li>用户账户管理与个性化服务</li>
            <li>其他相关增值服务</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. 用户账户</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3.1 账户注册</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            您在使用本平台服务时需要注册一个账户。注册时，您应提供真实、准确、完整的个人资料，
            并在资料变更时及时更新。如果您提供的资料不真实、不准确、不完整，
            本平台有权暂停或终止您的账户。
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3.2 账户安全</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            您应妥善保管账户和密码，因您保管不当造成的损失，本平台不承担责任。
            您理解并同意，本平台有权在必要时冻结您的账户，并在冻结期间拒绝提供服务。
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3.3 账户注销</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            您有权随时注销账户。账户注销后，您将无法使用本平台的服务，
            且您的所有数据将被删除或匿名化处理。
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. 用户行为规范</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            您在使用本平台服务时，不得从事以下行为：
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>发布、传送、传播、储存违反国家法律法规的内容</li>
            <li>发布、传送、传播、储存侵害他人名誉权、肖像权、知识产权等合法权益的内容</li>
            <li>虚构事实、隐瞒真相以误导、欺骗他人</li>
            <li>发表、传送、传播、储存侵害他人隐私权的内容</li>
            <li>利用本平台服务进行任何危害计算机网络安全的行为</li>
            <li>未经本平台许可，以营利为目的使用本平台服务</li>
            <li>其他违反法律法规、政策及公序良俗的行为</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. 知识产权</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          本平台的所有内容，包括但不限于文字、图片、音频、视频、软件、程序、版面设计等，
          其知识产权归本平台所有。未经本平台书面许可，任何人不得擅自使用、修改、复制、
          公开发布上述内容。
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          您在本平台上发布的内容，您保证拥有合法的权利，不侵犯任何第三方的知识产权或其他合法权益。
          您授予本平台在全球范围内免费的、非排他的、永久的、不可撤销的使用许可。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. 服务变更、中断或终止</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            本平台有权在以下情况下变更、中断或终止服务：
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>因系统维护、升级的需要</li>
            <li>因不可抗力、计算机病毒、黑客攻击、系统不稳定等原因</li>
            <li>您违反本协议的规定</li>
            <li>其他本平台认为需要变更、中断或终止服务的情况</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. 免责声明</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          本平台对以下情况不承担责任：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>因不可抗力导致的服务中断或终止</li>
          <li>因第三方原因导致的服务中断或终止</li>
          <li>因您自身原因导致的服务中断或终止</li>
          <li>因网络状况、设备故障等原因导致的服务中断或终止</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. 协议修改</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          本平台有权随时修改本协议的内容。修改后的协议将在本平台公布，
          并自公布之日起生效。如果您不同意修改后的协议，您有权停止使用本平台的服务。
          如果您继续使用本平台的服务，则视为您已接受修改后的协议。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. 法律适用与争议解决</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律。
          如双方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；
          协商不成时，任何一方均可向本平台所在地有管辖权的人民法院提起诉讼。
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">10. 其他</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          本协议中的标题仅为方便阅读而设，不影响本协议条款的含义或解释。
          本平台未行使或执行本协议任何权利或规定，不构成对该权利或规定的放弃。
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          如果您对本协议有任何疑问，请联系我们：
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300">邮箱：a2778462077@foxmail.com</p>
          <p className="text-gray-700 dark:text-gray-300">电话：13075244743</p>
        </div>
      </section>
    </LegalLayout>
  );
}