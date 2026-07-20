import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回首页</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/images/logo/icon.svg" 
                alt="NovaMat AI" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">NovaMat AI</span>
            </Link>
            <div className="w-24" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {description}
            </p>
          )}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-black/20 border-t border-gray-200 dark:border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2026 NovaMat AI. 保留所有权利。
          </p>
        </div>
      </footer>
    </div>
  );
}