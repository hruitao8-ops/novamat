"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/contexts/auth-context"
import {
  ChevronUp,
  FlaskConical,
  User,
  Settings,
  Menu,
  Upload,
  BrainCircuit,
  Crown,
  LogOut,
  UserCircle,
  Download,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/blocks/sidebar"

import { useSidebar } from "@/components/blocks/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { GlassRadioGroup, type GlassRadioOption } from "@/components/ui/glass-radio-group"
import AnimatedList from "@/components/ui/animated-list"

/* ── 会员等级配置 ── */

interface AppSidebarProps {
  activePanel: 'new-experiment' | 'upload-data' | 'smart-analysis' | null;
  setActivePanel: (panel: 'new-experiment' | 'upload-data' | 'smart-analysis' | null) => void;
}

const membershipOptions: GlassRadioOption[] = [
  {
    value: 'free',
    label: '免费',
    color: 'linear-gradient(135deg, rgba(160,160,160,0.3), rgba(192,192,192,0.5))',
    glow: '0 0 14px rgba(192, 192, 192, 0.4), 0 0 8px rgba(255, 255, 255, 0.3) inset',
    innerShadow: '0 0 8px rgba(255, 255, 255, 0.3) inset',
  },
  {
    value: 'basic',
    label: '基础',
    color: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(96,165,250,0.5))',
    glow: '0 0 14px rgba(59, 130, 246, 0.4), 0 0 8px rgba(96, 165, 250, 0.3) inset',
    innerShadow: '0 0 8px rgba(96, 165, 250, 0.3) inset',
  },
  {
    value: 'pro',
    label: '专业',
    color: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(167,139,250,0.5))',
    glow: '0 0 14px rgba(139, 92, 246, 0.4), 0 0 8px rgba(167, 139, 250, 0.3) inset',
    innerShadow: '0 0 8px rgba(167, 139, 250, 0.3) inset',
  },
  {
    value: 'ultimate',
    label: '旗舰',
    color: 'linear-gradient(135deg, rgba(255,215,0,0.3), rgba(255,200,0,0.5))',
    glow: '0 0 14px rgba(255, 215, 0, 0.4), 0 0 8px rgba(255, 235, 150, 0.3) inset',
    innerShadow: '0 0 8px rgba(255, 235, 150, 0.3) inset',
  },
]

export function AppSidebar({ activePanel, setActivePanel }: AppSidebarProps) {
  const router = useRouter()
  const { user, logout, updateProfile } = useAuth()

  const currentTier = user?.membershipTier || 'free'

  const items = [
    {
      title: "新建实验",
      id: "new-experiment" as const,
      icon: FlaskConical,
      description: "创建仿真实验",
    },
    {
      title: "上传数据",
      id: "upload-data" as const,
      icon: Upload,
      description: "导入实验数据",
    },
    {
      title: "智能分析",
      id: "smart-analysis" as const,
      icon: BrainCircuit,
      description: "AI 数据洞察",
    },
  ]

  const recentChats = [
    '高分子材料拉伸性能分析',
    '纳米复合材料热导率模拟',
    '合金相变温度预测实验',
    '石墨烯导电性能优化',
    '陶瓷材料断裂韧性测试',
    '超导材料临界磁场计算',
    '光催化降解效率评估',
    '锂电池充放电循环模拟',
    '碳纤维增强复合材料设计',
    '生物可降解塑料性能研究',
  ]
  const { toggleSidebar } = useSidebar()

  const handleItemClick = (id: 'new-experiment' | 'upload-data' | 'smart-analysis') => {
    setActivePanel(activePanel === id ? null : id);
  }

  const handleTierChange = (value: string) => {
    if (value !== 'free') {
      router.push(`/pricing?tier=${value}`)
    } else if (user) {
      updateProfile({ membershipTier: 'free' })
    }
  }

  const handleLogout = () => {
    logout()
    router.replace('/auth')
  }

  return (
    <Sidebar
      variant="floating"
      collapsible="icon"
    >
      <SidebarContent>
        {/* ── 功能菜单 ── */}
        <SidebarGroup>
          <SidebarGroupLabel>功能</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={toggleSidebar} asChild>
                  <span>
                    <Menu />
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleItemClick(item.id)}
                    className={cn(
                      "transition-colors",
                      activePanel === item.id
                        ? "bg-muted text-foreground data-[active=true]:bg-muted"
                        : ""
                    )}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* ── 全部对话（AnimatedList） ── */}
        <SidebarGroup>
          <SidebarGroupLabel>全部对话</SidebarGroupLabel>
          <SidebarGroupContent>
            <AnimatedList
              items={recentChats}
              onItemSelect={(item) => console.log('Selected:', item)}
              showGradients={true}
              enableArrowNavigation={false}
              displayScrollbar={false}
              initialSelectedIndex={-1}
            />
          </SidebarGroupContent>
        </SidebarGroup>

        {/* ── 会员中心（水平 GlassRadioGroup） ── */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-1.5 text-xs text-orange-500 font-semibold">
            <Crown className="w-3.5 h-3.5" />
            会员中心
          </SidebarGroupLabel>
          <SidebarGroupContent className="pt-1">
            <GlassRadioGroup
              variant="horizontal"
              compact
              options={membershipOptions}
              value={currentTier}
              onChange={handleTierChange}
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings /> <span>设置</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {user ? (
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-gray-900 dark:text-white shrink-0"
                      style={{ background: user.avatarColor }}
                    >
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span>{user?.name || 'NovaMat'}</span>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                  <UserCircle className="w-4 h-4 mr-2" />
                  <span>个人中心</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className="w-4 h-4 mr-2" />
                  <span>数据备份</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>退出登录</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
