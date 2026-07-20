"use client";

import { useState } from "react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/blocks/sidebar";
import { AppSidebar } from "@/components/blocks/whatsapp-sidebar";
import { AnimatedAIChat, AI_MODELS } from "@/components/ui/animated-ai-chat";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ChatPage() {
  const [activePanel, setActivePanel] = useState<'new-experiment' | 'upload-data' | 'smart-analysis' | null>(null);
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0]);

  return (
    <SidebarProvider>
      <AppSidebar
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />
      <SidebarInset className="bg-white dark:bg-black">
        <header className="flex items-center gap-3 border-b border-gray-200 dark:border-white/[0.06] px-4 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
          <SidebarTrigger className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white" />
          <div className="flex-1" />
          <Link href="/">
            <button
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-400 dark:text-white/50 hover:text-gray-900 dark:hover:text-white/90 hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-all text-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>首页</span>
            </button>
          </Link>
        </header>
        <div className="flex flex-1 items-center justify-center p-6">
          <div className="w-full max-w-4xl">
            <AnimatedAIChat
              activePanel={activePanel}
              setActivePanel={setActivePanel}
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
            />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
