"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

/* ───── 类型 ───── */

export interface UserProfile {
  id: string
  name: string
  email: string
  password: string        // 仅存储在 localStorage，不传到组件
  avatarColor: string    // 头像背景色
  membershipTier: 'free' | 'basic' | 'pro' | 'ultimate'
  createdAt: string      // ISO 日期
  settings: UserSettings
}

export interface UserSettings {
  emailNotifications: boolean
  dataBackupReminder: boolean
  autoSave: boolean
  language: 'zh-CN' | 'en-US'
}

export interface AuthContextType {
  user: UserProfile | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => { success: boolean; error?: string }
  register: (name: string, email: string, password: string) => { success: boolean; error?: string }
  logout: () => void
  updateProfile: (updates: Partial<Pick<UserProfile, 'name' | 'avatarColor' | 'membershipTier'>>) => void
  updateSettings: (settings: Partial<UserSettings>) => void
  changePassword: (oldPassword: string, newPassword: string) => { success: boolean; error?: string }
  deleteAccount: () => void
  allUsers: UserProfile[]   // 读取全部（用于开发调试）
}

/* ───── 默认值 ───── */

const defaultSettings: UserSettings = {
  emailNotifications: true,
  dataBackupReminder: true,
  autoSave: true,
  language: 'zh-CN',
}

const defaultColors = [
  'linear-gradient(135deg, #4D6BFE, #6366f1)',
  'linear-gradient(135deg, #8B5CF6, #a78bfa)',
  'linear-gradient(135deg, #EC4899, #f472b6)',
  'linear-gradient(135deg, #F59E0B, #fbbf24)',
  'linear-gradient(135deg, #10B981, #34d399)',
  'linear-gradient(135deg, #3B82F6, #60a5fa)',
  'linear-gradient(135deg, #EF4444, #f87171)',
  'linear-gradient(135deg, #06B6D4, #22d3ee)',
]

/* ───── Context ───── */

const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

/* ───── localStorage 工具 ───── */

const STORAGE_KEY = 'novamat_users'
const CURRENT_USER_KEY = 'novamat_current_user'

function getUsers(): UserProfile[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveUsers(users: UserProfile[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
}

function getCurrentUserId(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(CURRENT_USER_KEY)
}

function setCurrentUserId(id: string | null) {
  if (typeof window === 'undefined') return
  if (id) {
    localStorage.setItem(CURRENT_USER_KEY, id)
  } else {
    localStorage.removeItem(CURRENT_USER_KEY)
  }
}

/* ───── Provider ───── */

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 初始化：从 localStorage 恢复登录态
  useEffect(() => {
    const currentId = getCurrentUserId()
    if (currentId) {
      const users = getUsers()
      const found = users.find((u) => u.id === currentId) || null
      setUser(found)
    }
    setIsLoading(false)
  }, [])

  const login = useCallback((email: string, password: string) => {
    const users = getUsers()
    const found = users.find((u) => u.email === email && u.password === password)
    if (!found) {
      return { success: false, error: '邮箱或密码错误' }
    }
    setCurrentUserId(found.id)
    setUser(found)
    return { success: true }
  }, [])

  const register = useCallback((name: string, email: string, password: string) => {
    const users = getUsers()
    if (users.find((u) => u.email === email)) {
      return { success: false, error: '该邮箱已被注册' }
    }
    const newUser: UserProfile = {
      id: crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name,
      email,
      password,
      avatarColor: defaultColors[Math.floor(Math.random() * defaultColors.length)],
      membershipTier: 'free',
      createdAt: new Date().toISOString(),
      settings: { ...defaultSettings },
    }
    users.push(newUser)
    saveUsers(users)
    setCurrentUserId(newUser.id)
    setUser(newUser)
    return { success: true }
  }, [])

  const logout = useCallback(() => {
    setCurrentUserId(null)
    setUser(null)
  }, [])

  const updateProfile = useCallback((updates: Partial<Pick<UserProfile, 'name' | 'avatarColor' | 'membershipTier'>>) => {
    setUser((prev) => {
      if (!prev) return null
      const updated = { ...prev, ...updates }
      // 同步到 localStorage
      const users = getUsers()
      const idx = users.findIndex((u) => u.id === prev.id)
      if (idx !== -1) {
        users[idx] = updated
        saveUsers(users)
      }
      return updated
    })
  }, [])

  const updateSettings = useCallback((settings: Partial<UserSettings>) => {
    setUser((prev) => {
      if (!prev) return null
      const updated = { ...prev, settings: { ...prev.settings, ...settings } }
      const users = getUsers()
      const idx = users.findIndex((u) => u.id === prev.id)
      if (idx !== -1) {
        users[idx] = updated
        saveUsers(users)
      }
      return updated
    })
  }, [])

  const changePassword = useCallback((oldPassword: string, newPassword: string) => {
    setUser((prev) => {
      if (!prev) return null
      if (prev.password !== oldPassword) {
        return prev
      }
      const updated = { ...prev, password: newPassword }
      const users = getUsers()
      const idx = users.findIndex((u) => u.id === prev.id)
      if (idx !== -1) {
        users[idx] = updated
        saveUsers(users)
      }
      return updated
    })
    // 验证密码
    const users = getUsers()
    const current = users.find((u) => u.id === user?.id)
    if (current && current.password !== oldPassword) {
      return { success: false, error: '原密码错误' }
    }
    return { success: true }
  }, [user])

  const deleteAccount = useCallback(() => {
    if (!user) return
    const users = getUsers().filter((u) => u.id !== user.id)
    saveUsers(users)
    setCurrentUserId(null)
    setUser(null)
  }, [user])

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
    updateSettings,
    changePassword,
    deleteAccount,
    allUsers: [],
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
