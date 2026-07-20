"use client";

import { useEffect } from "react";

/**
 * 禁用浏览器滚动恢复，确保刷新后回到顶部
 */
export function useScrollToTop() {
  useEffect(() => {
    // 禁用浏览器的滚动恢复功能
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    
    // 滚动到顶部
    window.scrollTo(0, 0);
    
    // 清理函数：组件卸载时恢复默认行为
    return () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, []);
}

/**
 * 仅在页面加载时滚动到顶部（不影响导航）
 */
export function useScrollToTopOnRefresh() {
  useEffect(() => {
    // 使用 performance.navigation 判断是否为刷新
    const isReload = 
      typeof window !== "undefined" &&
      window.performance &&
      performance.navigation &&
      performance.navigation.type === 1;
    
    if (isReload) {
      window.scrollTo(0, 0);
    }
  }, []);
}