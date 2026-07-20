"use client";

import React, { useRef, useEffect, useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import DotMap from "@/components/ui/dot-map";

/** cn utility */
function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Reusable SignInCard for NovaMat AI dark theme */
interface SignInCardProps {
  /** Called on successful sign-in with email/password */
  onSignIn?: (email: string, password: string) => void;
  /** Called when user clicks "Forgot password" */
  onForgotPassword?: () => void;
  /** Called when user clicks "Sign up" or toggles to register mode */
  onSwitchToRegister?: () => void;
  /** Is the card currently in loading state? */
  isLoading?: boolean;
  /** Error message to display */
  error?: string;
  /** Whether register mode is enabled */
  showRegisterToggle?: boolean;
}

export default function SignInCard({
  onSignIn,
  onForgotPassword,
  onSwitchToRegister,
  isLoading = false,
  error = "",
  showRegisterToggle = false,
}: SignInCardProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn?.(email, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl overflow-hidden rounded-2xl flex bg-[rgba(10,10,15,0.85)] backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60"
    >
      {/* Left side - Map */}
      <div className="hidden md:block w-1/2 h-[600px] relative overflow-hidden border-r border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 to-indigo-950/30">
          <DotMap />

          {/* Logo and text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-6"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <ArrowRight className="text-white h-6 w-6" />
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400"
            >
              NovaMat AI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-sm text-center text-white/40 max-w-xs"
            >
              Sign in to access your lab dashboard and connect with researchers worldwide
            </motion.p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-1 text-white/90">
            Welcome back
          </h1>
          <p className="text-white/30 mb-8">Sign in to your account</p>

          {/* Google button */}
          <div className="mb-6">
            <button
              className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 text-white/60"
              onClick={() => console.log("Google sign-in")}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                <path fill="#EA4335" d="M1 1h22v22H1z" fillOpacity="0" />
              </svg>
              <span>使用 Google 登录</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[rgba(10,10,15,0.85)] text-white/25">或</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-red-500/10 border border-red-500/20"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-400/70 animate-pulse" />
                <span className="text-red-400/80 text-xs font-medium">{error}</span>
              </motion.div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/50 mb-1">
                Email <span className="text-violet-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/60 transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/50 mb-1">
                Password <span className="text-violet-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full h-11 rounded-xl border border-white/10 bg-white/5 px-4 pr-10 text-sm text-white/90 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/60 transition-all duration-300"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/30 hover:text-white/60"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className={cn(
                "w-full py-3.5 rounded-xl bg-gradient-to-r relative overflow-hidden from-violet-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-600/25 disabled:opacity-60 disabled:cursor-not-allowed",
                isHovered ? "shadow-xl shadow-violet-500/30" : ""
              )}
            >
              <span className="flex items-center justify-center relative z-10">
                Sign in
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
              {isHovered && (
                <motion.span
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ filter: "blur(8px)" } as React.CSSProperties}
                />
              )}
            </motion.button>

            {/* Forgot password */}
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-violet-400/50 hover:text-violet-400/80 text-sm transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Register toggle */}
            {showRegisterToggle && (
              <div className="text-center mt-2">
                <button
                  type="button"
                  onClick={onSwitchToRegister}
                  className="text-white/30 hover:text-white/50 text-sm transition-colors"
                >
                  没有账户？去注册
                </button>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
