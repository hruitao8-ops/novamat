"use client";

import { FaqPro, type FaqProItem } from "@/components/ui/faq-pro";

const termsItems: FaqProItem[] = [
  {
    id: "accept-terms",
    question: "我需要做什么才能接受用户协议？",
    answer: "您通过网络页面点击确认或以其他方式选择接受协议，即表示您已与平台达成协议。如果您不同意协议的任何内容，请立即停止使用平台提供的服务。",
  },
  {
    id: "account-requirements",
    question: "注册账户有什么要求？",
    answer: "注册时需要提供真实、准确、完整的个人资料，并在资料变更时及时更新。如果提供的资料不真实、不准确、不完整，平台有权暂停或终止您的账户。",
  },
  {
    id: "account-security",
    question: "如何保障账户安全？",
    answer: "您应妥善保管账户和密码，因保管不当造成的损失平台不承担责任。建议使用强密码，定期更换密码，不要与他人共享账户信息。",
  },
  {
    id: "account-cancellation",
    question: "如何注销账户？",
    answer: "您有权随时注销账户。账户注销后，您将无法使用平台的服务，且您的所有数据将被删除或匿名化处理。请联系客服申请注销。",
  },
  {
    id: "prohibited-behaviors",
    question: "哪些行为是被禁止的？",
    answer: "禁止发布违法违规内容、侵害他人权益的内容、虚构事实误导他人、危害网络安全、未经许可以营利为目的使用服务等。具体请查看协议第4条。",
  },
  {
    id: "intellectual-property",
    question: "平台内容的知识产权归谁所有？",
    answer: "平台的所有内容（文字、图片、音频、视频、软件等）的知识产权归平台所有。未经书面许可，不得擅自使用、修改、复制、公开发布。",
  },
  {
    id: "service-interruption",
    question: "什么情况下服务会中断或终止？",
    answer: "系统维护升级、不可抗力、计算机病毒、黑客攻击、用户违反协议规定等情况下，平台有权变更、中断或终止服务。",
  },
  {
    id: "dispute-resolution",
    question: "发生争议如何解决？",
    answer: "协议适用中华人民共和国法律。发生争议时双方应友好协商解决；协商不成时，可向平台所在地有管辖权的人民法院提起诉讼。",
  },
];

export function TermsFaq() {
  return <FaqPro className="w-full" defaultOpenFirst items={termsItems} />;
}

const privacyItems: FaqProItem[] = [
  {
    id: "data-collection",
    question: "平台收集哪些个人信息？",
    answer: "我们收集您注册时提供的信息（姓名、邮箱、密码）、使用服务时产生的数据（实验数据、操作记录）、设备信息（IP地址、浏览器类型）等。",
  },
  {
    id: "data-usage",
    question: "收集的信息有什么用途？",
    answer: "用于提供、维护和改进服务、与您沟通、保障账户安全、遵守法律义务、进行数据分析以改善用户体验等。",
  },
  {
    id: "data-sharing",
    question: "平台会与他人共享我的信息吗？",
    answer: "未经您同意，我们不会与第三方共享您的个人信息。但在法律要求、保护权益、服务提供商合作等情况下可能会共享必要信息。",
  },
  {
    id: "data-protection",
    question: "如何保护我的个人信息安全？",
    answer: "我们采用数据加密、访问控制、安全审计等技术和管理措施保护您的信息。但我们建议您也采取措施保护账户安全。",
  },
  {
    id: "data-rights",
    question: "我对自己的信息有什么权利？",
    answer: "您有权访问、更正、删除自己的个人信息，有权撤回同意、数据可携带，以及向监管机构投诉。如需行使权利，请联系我们。",
  },
  {
    id: "data-retention",
    question: "信息会保留多久？",
    answer: "我们仅在实现收集目的所必需的期限内保留您的信息。账户注销后，您的数据将被删除或匿名化处理。法律要求保存的信息按法律规定执行。",
  },
  {
    id: "cookies-usage",
    question: "平台使用 Cookie 吗？",
    answer: "是的，我们使用 Cookie 来记住您的登录状态、保存偏好设置、分析使用情况等。您可以通过浏览器设置管理 Cookie，但这可能影响某些功能的使用。",
  },
  {
    id: "privacy-update",
    question: "隐私政策会更新吗？",
    answer: "我们可能会不时更新隐私政策。更新后会在页面公布，重大变更会通过邮件或其他方式通知您。请定期查看最新政策。",
  },
];

export function PrivacyFaq() {
  return <FaqPro className="w-full" defaultOpenFirst items={privacyItems} />;
}

const cookiesItems: FaqProItem[] = [
  {
    id: "what-is-cookie",
    question: "什么是 Cookie？",
    answer: "Cookie 是网站存储在您设备上的小型文本文件，用于记住您的信息和偏好。它们可以帮助网站识别您的身份、记住您的设置、提供个性化体验。",
  },
  {
    id: "cookie-types",
    question: "平台使用哪些类型的 Cookie？",
    answer: "我们使用必要 Cookie（确保网站正常运行）、功能 Cookie（记住您的设置）、分析 Cookie（了解使用情况）、营销 Cookie（提供相关广告）等。",
  },
  {
    id: "necessary-cookies",
    question: "哪些 Cookie 是必要的？",
    answer: "必要 Cookie 用于身份验证、安全防护、语言设置等核心功能。禁用这些 Cookie 可能导致网站无法正常工作。",
  },
  {
    id: "manage-cookies",
    question: "如何管理 Cookie？",
    answer: "您可以通过浏览器设置管理或删除 Cookie。大多数浏览器允许您查看、删除或阻止 Cookie。但请注意，禁用某些 Cookie 可能影响网站功能。",
  },
  {
    id: "disable-cookies",
    question: "禁用 Cookie 会有什么影响？",
    answer: "禁用必要 Cookie 可能导致无法登录、无法保存设置、功能异常等。禁用非必要 Cookie 主要影响个性化体验和数据分析功能。",
  },
  {
    id: "third-party-cookies",
    question: "平台使用第三方 Cookie 吗？",
    answer: "是的，我们可能使用第三方服务提供商的 Cookie，如 Google Analytics（分析使用情况）、社交媒体平台（分享功能）等。这些 Cookie 由第三方控制。",
  },
  {
    id: "cookie-consent",
    question: "我需要同意使用 Cookie 吗？",
    answer: "根据相关法规，对于非必要 Cookie，我们需要您的同意。您可以通过 Cookie 设置管理您的同意偏好，随时撤回同意。",
  },
  {
    id: "cookie-update",
    question: "Cookie 政策会更新吗？",
    answer: "我们可能会不时更新 Cookie 政策。更新后会在页面公布，建议您定期查看最新政策以了解我们如何使用 Cookie。",
  },
];

export function CookiesFaq() {
  return <FaqPro className="w-full" defaultOpenFirst items={cookiesItems} />;
}