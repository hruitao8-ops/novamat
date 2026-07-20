# Logo 使用说明

## 📁 Logo 文件

### 1. `logo.svg` - 完整 Logo (512x512)
用于：
- 启动页面
- 关于页面
- 大尺寸展示

### 2. `icon.svg` - 图标 Logo (64x64)
用于：
- 网站图标 (favicon)
- 导航栏 Logo
- 小尺寸展示

## 🎨 设计理念

### Logo 元素说明

1. **六边形外框**
   - 代表材料科学的晶体结构
   - 象征稳定性和科学性

2. **中心原子模型**
   - 带有电子轨道的原子符号
   - 代表材料科学研究核心

3. **神经网络节点**
   - 四个连接节点
   - 代表 AI 智能分析能力

4. **字母 "N"**
   - NovaMat 的首字母
   - 居中突出品牌标识

5. **渐变配色**
   - 紫色 (#8B5CF6) 到靛蓝 (#6366F1)
   - 科技感与现代感并存

## 🔧 使用方式

### 在 React 组件中使用

```tsx
// 完整 Logo
<img src="/images/logo/logo.svg" alt="NovaMat AI" className="h-16" />

// 图标 Logo
<img src="/images/logo/icon.svg" alt="NovaMat AI" className="h-8 w-8" />
```

### 作为 Favicon

在 `app/layout.tsx` 中添加：

```tsx
<link rel="icon" href="/images/logo/icon.svg" type="image/svg+xml" />
```

## 🎯 配色方案

| 颜色 | HEX | RGB | 用途 |
|------|-----|-----|------|
| 主紫色 | #8B5CF6 | 139, 92, 246 | 主色调 |
| 靛蓝色 | #6366F1 | 99, 102, 241 | 渐变终点 |
| 蓝色 | #3B82F6 | 59, 130, 246 | 辅助色 |

## 📐 尺寸建议

| 用途 | 尺寸 | 文件 |
|------|------|------|
| Favicon | 32x32, 64x64 | icon.svg |
| 导航栏 | 40x40 | icon.svg |
| 启动页 | 200x200 | logo.svg |
| 关于页 | 300x300 | logo.svg |

## 🖼️ 如需 PNG 格式

可使用在线工具转换 SVG 到 PNG：
- https://cloudconvert.com/svg-to-png
- https://convertio.co/svg-png/

推荐尺寸：
- favicon-16x16.png
- favicon-32x32.png
- logo-192x192.png
- logo-512x512.png

---

设计时间：2024年
设计风格：科技、现代、专业
品牌：NovaMat AI - 虚拟仿真实验平台