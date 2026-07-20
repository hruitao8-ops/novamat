"use client";

import { FaqPro, type FaqProItem } from "@/components/ui/faq-pro";

const items: FaqProItem[] = [
  {
    id: "register",
    question: "如何注册账户？",
    answer: "点击页面右上角的\"登录注册\"按钮，在注册页面填写邮箱和密码即可完成注册。注册成功后即可使用所有功能。",
  },
  {
    id: "forgot-password",
    question: "忘记密码怎么办？",
    answer: "在登录页面点击\"忘记密码\"链接，输入您的注册邮箱，系统将发送密码重置链接到您的邮箱。点击链接即可重新设置密码。",
  },
  {
    id: "ai-chat",
    question: "AI 对话有什么功能？",
    answer: "AI 对话支持多种功能：实验方案咨询、数据分析指导、材料知识问答、操作建议、文献检索等。基于先进的大语言模型，提供智能化的科研辅助服务。",
  },
  {
    id: "create-experiment",
    question: "如何创建虚拟实验？",
    answer: "点击\"新建实验\"按钮，选择实验类型（如材料合成、性能测试、结构分析等），设置实验参数后即可开始仿真。系统提供多种预设模板，帮助您快速开始。",
  },
  {
    id: "export-data",
    question: "实验数据如何导出？",
    answer: "在实验结果页面，点击\"导出\"按钮，支持多种格式导出：PDF 报告、Excel 表格、CSV 数据、JSON 格式等。还可以直接分享实验链接给团队成员。",
  },
  {
    id: "browser-support",
    question: "支持哪些浏览器？",
    answer: "支持 Chrome、Firefox、Safari、Edge 等主流浏览器的最新版本。建议使用 Chrome 浏览器以获得最佳体验。移动端浏览器同样支持。",
  },
  {
    id: "tech-support",
    question: "遇到技术问题怎么办？",
    answer: "您可以通过多种方式获取帮助：查看使用文档、联系在线客服、发送邮件至 a2778462077@foxmail.com，或拨打电话 13075244743。我们的技术团队将竭诚为您服务。",
  },
  {
    id: "data-security",
    question: "数据安全如何保障？",
    answer: "我们采用企业级安全防护措施：数据加密存储、访问权限控制、操作日志记录、定期安全审计。您的实验数据和个人信息都受到严格保护。",
  },
];

export function FaqProPreview() {
  return <FaqPro className="w-full" defaultOpenFirst items={items} />;
}

export default FaqProPreview;
