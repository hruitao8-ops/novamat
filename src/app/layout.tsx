import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/contexts/auth-context";
import { ThemeProvider } from "@/components/contexts/theme-context";
import { GlobalThemeToggle } from "@/components/ui/global-theme-toggle";

export const metadata: Metadata = {
  title: "NovaMat AI - 虚拟仿真实验平台",
  description: "NovaMat AI 虚拟仿真实验平台 - AI 驱动的材料科学研究工具",
  icons: {
    icon: '/images/logo/icon.svg',
    apple: '/images/logo/icon.svg',
  },
};

/**
 * Inline script that runs BEFORE React hydration to prevent FOUC.
 * Reads the persisted theme from localStorage and sets the `dark` class
 * on <html> immediately so Tailwind dark variants are correct from paint.
 */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('nova-theme');
    if (t === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

/**
 * Scroll to top on page refresh
 */
const scrollTopScript = `
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: scrollTopScript }} />
      </head>
      <body>
        <ThemeProvider>
          <AuthProvider>
            {children}
            <GlobalThemeToggle />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
