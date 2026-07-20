'use client';

import { useEffect, useState } from 'react';

interface BeijingClockProps {
  className?: string;
}

export default function BeijingClock({ className = '' }: BeijingClockProps) {
  const [time, setTime] = useState<string>('--:--:--');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // 格式化时间 HH:MM:SS
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);

      // 格式化日期 YYYY年MM月DD日 星期X
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
      const weekDay = weekDays[now.getDay()];
      setDate(`${year}年${month}月${day}日 星期${weekDay}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 秒针闪烁指示器
  const [colonVisible, setColonVisible] = useState(true);
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setColonVisible(v => !v);
    }, 500);
    return () => clearInterval(blinkTimer);
  }, []);

  const parts = time.split(':');

  return (
    <div className={`flex flex-col items-end gap-1 ${className}`}>
      {/* 时间 */}
      <div className="flex items-baseline gap-0.5 tabular-nums">
        <span className="text-lg font-light tracking-wide text-gray-900/70 dark:text-white/70">{parts[0]}</span>
        <span className={`text-lg font-light text-violet-600/80 dark:text-violet-400/80 transition-opacity duration-200 ${colonVisible ? 'opacity-100' : 'opacity-20'}`}>:</span>
        <span className="text-lg font-light tracking-wide text-gray-900/70 dark:text-white/70">{parts[1]}</span>
        <span className={`text-lg font-light text-violet-600/80 dark:text-violet-400/80 transition-opacity duration-200 ${colonVisible ? 'opacity-100' : 'opacity-20'}`}>:</span>
        <span className="text-base font-extralight tracking-wide text-gray-900/40 dark:text-white/40">{parts[2]}</span>
        <span className="ml-1.5 text-[10px] font-normal text-violet-600/50 dark:text-violet-400/50 tracking-wider">CST</span>
      </div>
      {/* 日期 */}
      <span className="text-[11px] font-light text-gray-700/25 dark:text-white/25 tracking-wider">{date}</span>
    </div>
  );
}
