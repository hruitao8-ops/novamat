"use client";

import { useRef, useEffect, useState } from "react";

type RoutePoint = {
  x: number;
  y: number;
  delay: number;
};

const DOT_RADIUS = 1.2;
const GAP = 12;

/** 根据比例生成"世界地图轮廓"的点阵 */
function generateDots(width: number, height: number) {
  const dots: { x: number; y: number; opacity: number }[] = [];
  for (let x = 0; x < width; x += GAP) {
    for (let y = 0; y < height; y += GAP) {
      const inMap =
        // North America
        (x < width * 0.25 && x > width * 0.05 && y < height * 0.4 && y > height * 0.1) ||
        // South America
        (x < width * 0.25 && x > width * 0.15 && y < height * 0.8 && y > height * 0.4) ||
        // Europe
        (x < width * 0.45 && x > width * 0.3 && y < height * 0.35 && y > height * 0.15) ||
        // Africa
        (x < width * 0.5 && x > width * 0.35 && y < height * 0.65 && y > height * 0.35) ||
        // Asia
        (x < width * 0.7 && x > width * 0.45 && y < height * 0.5 && y > height * 0.1) ||
        // Australia
        (x < width * 0.8 && x > width * 0.65 && y < height * 0.8 && y > height * 0.6);

      if (inMap && Math.random() > 0.3) {
        dots.push({
          x,
          y,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    }
  }
  return dots;
}

/** 动画路线 */
function getRoutes(width: number, height: number) {
  return [
    { start: { x: width * 0.1, y: height * 0.3, delay: 0 }, end: { x: width * 0.2, y: height * 0.15, delay: 0 }, color: "#8b5cf6" },
    { start: { x: width * 0.2, y: height * 0.15, delay: 2 }, end: { x: width * 0.28, y: height * 0.25, delay: 2 }, color: "#6366f1" },
    { start: { x: width * 0.05, y: height * 0.1, delay: 1 }, end: { x: width * 0.18, y: height * 0.35, delay: 1 }, color: "#a78bfa" },
    { start: { x: width * 0.3, y: height * 0.12, delay: 0.5 }, end: { x: width * 0.2, y: height * 0.35, delay: 0.5 }, color: "#8b5cf6" },
  ];
}

export default function DotMap({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const routesRef = useRef<any>([]);

  // 响应容器尺寸
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
      canvas.width = width;
      canvas.height = height;
    });
    observer.observe(canvas.parentElement as Element);
    return () => observer.disconnect();
  }, []);

  // 生成点阵 & 路线
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    routesRef.current = getRoutes(dimensions.width, dimensions.height);
  }, [dimensions]);

  // 动画主循环
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const dots = generateDots(dimensions.width, dimensions.height);
    const routes = routesRef.current;
    let rafId: number;
    let startTime = Date.now();

    function drawDots() {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${dot.opacity})`;
        ctx.fill();
      }
    }

    function drawRoutes() {
      const elapsedSec = (Date.now() - startTime) / 1000;
      for (const route of routes) {
        const t = elapsedSec - route.start.delay;
        if (t <= 0) continue;
        const progress = Math.min(t / 3, 1);
        const cx = route.start.x + (route.end.x - route.start.x) * progress;
        const cy = route.start.y + (route.end.y - route.start.y) * progress;

        // 路线
        ctx.beginPath();
        ctx.moveTo(route.start.x, route.start.y);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = route.color;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // 起点
        ctx.beginPath();
        ctx.arc(route.start.x, route.start.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = route.color;
        ctx.fill();

        // 移动点
        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#a78bfa";
        ctx.fill();

        // 光晕
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.35)";
        ctx.fill();

        if (progress >= 1) {
          ctx.beginPath();
          ctx.arc(route.end.x, route.end.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = route.color;
          ctx.fill();
        }
      }
    }

    function animate() {
      drawDots();
      drawRoutes();
      const elapsedSec = (Date.now() - startTime) / 1000;
      if (elapsedSec > 15) startTime = Date.now();
      rafId = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [dimensions]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
