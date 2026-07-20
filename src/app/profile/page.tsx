"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  User,
  Mail,
  Calendar,
  Crown,
  Palette,
  Bell,
  Database,
  Shield,
  Trash2,
  Check,
  Eye,
  EyeOff,
  LogOut,
  ChevronRight,
  Sparkles,
  Clock,
  HardDrive,
  Zap,
} from 'lucide-react'
import { useAuth, type UserProfile, type UserSettings } from '@/components/contexts/auth-context'
import AnimatedContent from '@/components/ui/animated-content'


/* ───── 头像颜色选择 ───── */

const avatarColors = [
  'linear-gradient(135deg, #4D6BFE, #6366f1)',
  'linear-gradient(135deg, #8B5CF6, #a78bfa)',
  'linear-gradient(135deg, #EC4899, #f472b6)',
  'linear-gradient(135deg, #F59E0B, #fbbf24)',
  'linear-gradient(135deg, #10B981, #34d399)',
  'linear-gradient(135deg, #3B82F6, #60a5fa)',
  'linear-gradient(135deg, #EF4444, #f87171)',
  'linear-gradient(135deg, #06B6D4, #22d3ee)',
]

/* ───── 会员等级名称映射 ───── */

const tierLabels: Record<string, { label: string; color: string; desc: string }> = {
  free:     { label: '免费版',   color: '#9ca3af', desc: '基础功能体验' },
  basic:    { label: '基础版',   color: '#3b82f6', desc: '¥29/月 — 高级分析' },
  pro:      { label: '专业版',   color: '#8b5cf6', desc: '¥99/月 — 无限实验' },
  ultimate: { label: '旗舰版',   color: '#f59e0b', desc: '¥299/月 — 全部权限' },
}

/* ───── 使用统计（模拟数据）───── */

function UsageStats({ user }: { user: UserProfile }) {
  const stats = [
    { icon: FlaskConical2, label: '实验次数', value: user.membershipTier === 'free' ? 3 : 128, limit: user.membershipTier === 'free' ? 10 : 999 },
    { icon: HardDrive, label: '数据存储', value: '12.4 MB', bar: 24 },
    { icon: Zap, label: 'API 调用', value: user.membershipTier === 'free' ? 156 : 12840, limit: user.membershipTier === 'free' ? 500 : 99999 },
    { icon: Clock, label: '使用天数', value: Math.max(1, Math.floor((Date.now() - new Date(user.createdAt).getTime()) / 86400000)) },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.03] p-3.5"
        >
          <div className="flex items-center gap-2 mb-2">
            <s.icon className="w-3.5 h-3.5 text-violet-400/60" />
            <span className="text-[11px] text-gray-400 dark:text-white/40 font-medium">{s.label}</span>
          </div>
          <p className="text-lg font-bold text-gray-900 dark:text-white">{s.value}</p>
          {s.limit && (
            <div className="mt-2 h-1 rounded-full bg-gray-200 dark:bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all"
                style={{ width: `${Math.min(100, (typeof s.value === 'number' ? s.value : 0) / s.limit * 100)}%` }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function FlaskConical2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 3h6" />
      <path d="M10 9V3h4v6l5 8.5a2 2 0 0 1-1.7 3H6.7a2 2 0 0 1-1.7-3Z" />
    </svg>
  )
}

/* ───── 设置项组件 ───── */

function SettingToggle({
  icon: Icon,
  label,
  desc,
  value,
  onChange,
}: {
  icon: React.ElementType
  label: string
  desc: string
  value: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between py-3.5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/[0.04] flex items-center justify-center">
          <Icon className="w-4 h-4 text-gray-400 dark:text-white/40" />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-white/80 font-medium">{label}</p>
          <p className="text-[11px] text-gray-300 dark:text-white/30">{desc}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`relative w-10 h-[22px] rounded-full transition-colors ${
          value ? 'bg-violet-600' : 'bg-gray-200 dark:bg-white/[0.1]'
        }`}
      >
        <motion.div
          animate={{ x: value ? 18 : 2 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="absolute top-[3px] w-4 h-4 rounded-full bg-white shadow"
        />
      </button>
    </div>
  )
}

/* ───── 主页面 ───── */

export default function ProfilePage() {
  const router = useRouter()
  const { user, isAuthenticated, updateProfile, updateSettings, changePassword, logout, deleteAccount } = useAuth()

  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [editName, setEditName] = useState(user?.name || '')
  const [selectedColor, setSelectedColor] = useState(user?.avatarColor || avatarColors[0])
  const [showOldPwd, setShowOldPwd] = useState(false)
  const [showNewPwd, setShowNewPwd] = useState(false)
  const [oldPwd, setOldPwd] = useState('')
  const [newPwd, setNewPwd] = useState('')
  const [pwdMsg, setPwdMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)
  const [toast, setToast] = useState('')

  // 未登录跳转
  React.useEffect(() => {
    if (!isAuthenticated && !user) router.replace('/auth')
  }, [isAuthenticated, user, router])

  if (!user) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-8 h-8 border-2 border-violet-500/30 border-t-violet-500 rounded-full"
        />
      </div>
    )
  }

  const tier = tierLabels[user.membershipTier] || tierLabels.free

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2000)
  }

  const handleSaveProfile = () => {
    updateProfile({ name: editName, avatarColor: selectedColor })
    showToast('个人信息已更新')
    setActiveSection(null)
  }

  const handleChangePassword = () => {
    if (!oldPwd || !newPwd) {
      setPwdMsg({ type: 'err', text: '请填写完整' })
      return
    }
    if (newPwd.length < 6) {
      setPwdMsg({ type: 'err', text: '新密码至少 6 位' })
      return
    }
    const result = changePassword(oldPwd, newPwd)
    if (result.success) {
      setPwdMsg({ type: 'ok', text: '密码修改成功' })
      setOldPwd('')
      setNewPwd('')
      setTimeout(() => { setPwdMsg(null); setActiveSection(null) }, 1500)
    } else {
      setPwdMsg({ type: 'err', text: result.error || '修改失败' })
    }
  }

  const handleBackup = () => {
    const data = JSON.stringify(user, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `novamat-backup-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
    showToast('数据已导出')
  }

  const handleDeleteAccount = () => {
    if (confirm('确定要删除账户吗？此操作不可恢复。')) {
      deleteAccount()
      router.replace('/auth')
    }
  }

  const handleLogout = () => {
    logout()
    router.replace('/auth')
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* ── 背景光 ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-orange-500/[0.04] blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-rose-500/[0.03] blur-[120px]" />
      </div>

      {/* ── Toast ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-xl bg-orange-500 text-white text-sm font-medium shadow-lg shadow-orange-500/30"
          >
            <Check className="w-4 h-4 inline mr-1.5" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        {/* ── 顶部导航 ── */}
        <div className="flex items-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => router.back()}
            className="w-9 h-9 rounded-xl border border-border bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="text-xl font-bold text-foreground">个人中心</h1>
        </div>

        {/* ── 用户卡片 ── */}
        <AnimatedContent distance={40} duration={0.6} threshold={0.2}>
          <div className="rounded-2xl border border-border bg-muted backdrop-blur-xl overflow-hidden">
            <div className="p-6 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full" />

              <div className="relative flex items-start gap-4">
                {/* 头像 */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-lg"
                  style={{ background: user.avatarColor }}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">{user.name}</h2>
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold"
                      style={{ color: tier.color, background: `${tier.color}15`, border: `1px solid ${tier.color}25` }}
                    >
                      <Crown className="w-2.5 h-2.5" />
                      {tier.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-gray-400 dark:text-white/40 text-xs">
                    <Mail className="w-3 h-3" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5 text-gray-300 dark:text-white/30 text-[11px]">
                    <Calendar className="w-3 h-3" />
                    <span>注册于 {new Date(user.createdAt).toLocaleDateString('zh-CN')}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditName(user.name)
                    setSelectedColor(user.avatarColor)
                    setActiveSection('edit-profile')
                  }}
                  className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.03] flex items-center justify-center text-gray-400 dark:text-white/40 hover:text-gray-600 dark:hover:text-white/70 hover:bg-gray-200 dark:hover:bg-white/[0.06] transition-all shrink-0"
                >
                  <User className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 升级按钮（免费用户） */}
              {user.membershipTier === 'free' && (
                <button
                  type="button"
                  onClick={() => router.push('/pricing')}
                  className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-600/15 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Sparkles className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">升级会员，解锁全部功能</span>
                  <ChevronRight className="w-4 h-4 relative z-10" />
                </button>
              )}
            </div>
          </div>
        </AnimatedContent>

        {/* ── 使用统计 ── */}
        <AnimatedContent distance={40} duration={0.6} delay={0.1} threshold={0.2} className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-white/60 mb-3">使用统计</h3>
          <UsageStats user={user} />
        </AnimatedContent>

        {/* ── 设置列表 ── */}
        <AnimatedContent distance={40} duration={0.6} delay={0.2} threshold={0.2} className="mb-6">
          <div className="rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-gray-100 dark:bg-white/[0.03] backdrop-blur-xl relative overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

              <div className="px-5">
                {/* 通知设置 */}
                <SettingToggle
                  icon={Bell}
                  label="邮件通知"
                  desc="接收实验完成和系统通知"
                  value={user.settings.emailNotifications}
                  onChange={(v) => { updateSettings({ emailNotifications: v }); showToast(v ? '已开启通知' : '已关闭通知') }}
                />
                <div className="h-px bg-gray-100 dark:bg-white/[0.04]" />
                <SettingToggle
                  icon={Database}
                  label="备份提醒"
                  desc="每周提醒备份实验数据"
                  value={user.settings.dataBackupReminder}
                  onChange={(v) => { updateSettings({ dataBackupReminder: v }); showToast(v ? '已开启提醒' : '已关闭提醒') }}
                />
                <div className="h-px bg-gray-100 dark:bg-white/[0.04]" />
                <SettingToggle
                  icon={Zap}
                  label="自动保存"
                  desc="实时保存实验进度"
                  value={user.settings.autoSave}
                  onChange={(v) => { updateSettings({ autoSave: v }); showToast(v ? '已开启自动保存' : '已关闭自动保存') }}
                />

                {/* 安全 */}
                <div className="h-px bg-gray-100 dark:bg-white/[0.04]" />
                <button
                  type="button"
                  onClick={() => {
                    setOldPwd('')
                    setNewPwd('')
                    setPwdMsg(null)
                    setActiveSection('change-password')
                  }}
                  className="flex items-center justify-between w-full py-3.5 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/[0.04] flex items-center justify-center">
                      <Shield className="w-4 h-4 text-gray-400 dark:text-white/40" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-700 dark:text-white/80 font-medium">修改密码</p>
                      <p className="text-[11px] text-gray-300 dark:text-white/30">更新账户密码</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-200 dark:text-white/20 group-hover:text-gray-400 dark:group-hover:text-white/40 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* ── 操作区 ── */}
        <AnimatedContent distance={40} duration={0.6} delay={0.3} threshold={0.2} className="rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-gray-100 dark:bg-white/[0.03] backdrop-blur-xl p-4 mb-6 space-y-2">
          <button
            type="button"
            onClick={handleBackup}
            className="w-full py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-white/[0.02] text-gray-500 dark:text-white/60 text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/[0.05] hover:text-gray-700 dark:hover:text-white/80 transition-all flex items-center justify-center gap-2"
          >
            <Database className="w-4 h-4" />
            导出备份数据
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-white/[0.02] text-gray-500 dark:text-white/60 text-sm font-medium hover:bg-red-500/10 hover:text-red-400/80 hover:border-red-500/20 transition-all flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            退出登录
          </button>
          <button
            type="button"
            onClick={handleDeleteAccount}
            className="w-full py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-white/[0.02] text-red-400/40 text-sm font-medium hover:bg-red-500/10 hover:text-red-400/60 hover:border-red-500/20 transition-all flex items-center justify-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            删除账户
          </button>
        </AnimatedContent>
      </div>

      {/* ── 弹窗：编辑个人信息 ── */}
      <AnimatePresence>
        {activeSection === 'edit-profile' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveSection(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-md mx-auto rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#1a1a2e]/95 backdrop-blur-2xl p-6 shadow-2xl"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5">编辑个人信息</h3>

              {/* 头像预览 */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-bold shadow-lg transition-all"
                  style={{ background: selectedColor }}
                >
                  {editName.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 dark:text-white/40 mb-1.5">用户名</label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.06] text-gray-900 dark:text-white text-sm focus:outline-none focus:border-violet-500/50 transition-all"
                  />
                </div>
              </div>

              {/* 颜色选择 */}
              <label className="block text-xs text-gray-400 dark:text-white/40 mb-2">头像颜色</label>
              <div className="flex flex-wrap gap-2 mb-6">
                {avatarColors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    className={`w-8 h-8 rounded-xl transition-all ${
                      selectedColor === c
                        ? 'ring-2 ring-white/40 ring-offset-2 ring-offset-white dark:ring-offset-[#1a1a2e] scale-110'
                        : 'hover:scale-105'
                    }`}
                    style={{ background: c }}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setActiveSection(null)}
                  className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.02] text-gray-400 dark:text-white/50 text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-all"
                >
                  取消
                </button>
                <button
                  type="button"
                  onClick={handleSaveProfile}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-600/20"
                >
                  保存
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── 弹窗：修改密码 ── */}
      <AnimatePresence>
        {activeSection === 'change-password' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveSection(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-md mx-auto rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#1a1a2e]/95 backdrop-blur-2xl p-6 shadow-2xl"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5">修改密码</h3>

              <div className="space-y-4 mb-4">
                <div>
                  <label className="block text-xs text-gray-400 dark:text-white/40 mb-1.5">原密码</label>
                  <div className="relative">
                    <input
                      type={showOldPwd ? 'text' : 'password'}
                      value={oldPwd}
                      onChange={(e) => setOldPwd(e.target.value)}
                      placeholder="请输入原密码"
                      className="w-full px-3 py-2.5 pr-9 rounded-lg bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.06] text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowOldPwd(!showOldPwd)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 dark:text-white/25 hover:text-gray-400 dark:hover:text-white/50 transition-colors"
                    >
                      {showOldPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 dark:text-white/40 mb-1.5">新密码</label>
                  <div className="relative">
                    <input
                      type={showNewPwd ? 'text' : 'password'}
                      value={newPwd}
                      onChange={(e) => setNewPwd(e.target.value)}
                      placeholder="至少 6 位"
                      className="w-full px-3 py-2.5 pr-9 rounded-lg bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.06] text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPwd(!showNewPwd)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 dark:text-white/25 hover:text-gray-400 dark:hover:text-white/50 transition-colors"
                    >
                      {showNewPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* 结果提示 */}
              {pwdMsg && (
                <p className={`text-xs mb-4 ${pwdMsg.type === 'ok' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {pwdMsg.text}
                </p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setActiveSection(null)}
                  className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.02] text-gray-400 dark:text-white/50 text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-all"
                >
                  取消
                </button>
                <button
                  type="button"
                  onClick={handleChangePassword}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-600/20"
                >
                  确认修改
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  )
}
