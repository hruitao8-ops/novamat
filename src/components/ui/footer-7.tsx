import React from "react";
import Link from "next/link";
import { FaWeibo, FaTiktok } from "react-icons/fa";
import { SiBilibili, SiWechat } from "react-icons/si";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "产品服务",
    links: [
      { name: "产品概览", href: "/" },
      { name: "价格方案", href: "/pricing" },
      { name: "功能特性", href: "/features" },
      { name: "更新日志", href: "/changelog" },
    ],
  },
  {
    title: "关于我们",
    links: [
      { name: "公司介绍", href: "/about" },
      { name: "团队成员", href: "/#team" },
      { name: "加入我们", href: "/join" },
      { name: "联系方式", href: "/contact" },
    ],
  },
  {
    title: "支持帮助",
    links: [
      { name: "帮助中心", href: "/help" },
      { name: "使用文档", href: "/docs" },
      { name: "常见问题", href: "/faq" },
      { name: "在线客服", href: "/support" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <SiWechat className="size-5" />, href: "#", label: "微信公众号" },
  { icon: <FaWeibo className="size-5" />, href: "#", label: "新浪微博" },
  { icon: <FaTiktok className="size-5" />, href: "#", label: "抖音" },
  { icon: <SiBilibili className="size-5" />, href: "#", label: "哔哩哔哩" },
];

const defaultLegalLinks = [
  { name: "用户协议", href: "/legal/terms" },
  { name: "隐私政策", href: "/legal/privacy" },
  { name: "Cookie 政策", href: "/legal/cookies" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/images/logo/icon.svg",
    alt: "NovaMat AI",
    title: "NovaMat AI",
  },
  sections = defaultSections,
  description = "AI 驱动的虚拟仿真实验平台，助力材料科学研究与创新",
  socialLinks = defaultSocialLinks,
  copyright = "© 2026 NovaMat AI. 保留所有权利。",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <Link href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8 w-8 rounded-lg"
                />
              </Link>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{logo.title}</h2>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary transition-colors">
                  <a href={social.href} aria-label={social.label} title={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-gray-900 dark:text-white">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-200 dark:border-white/10 py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-4">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary transition-colors">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};