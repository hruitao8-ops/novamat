# NovaMat AI - 虚拟仿真实验平台

AI 驱动的材料科学虚拟仿真实验平台

## 快速启动

### 方式一：一键启动（推荐）
双击 `start.bat` 文件，即可启动开发服务器

### 方式二：开发助手菜单
双击 `dev.bat` 文件，打开交互式菜单，可选择：
- 启动开发服务器
- 构建生产版本
- 启动生产服务器
- 运行代码检查
- 安装依赖
- 查看项目信息

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

## 项目结构

```
├── src/
│   ├── app/              # Next.js App Router 页面
│   │   ├── page.tsx      # 首页
│   │   ├── chat/         # AI 对话页面
│   │   ├── auth/         # 登录/注册页面
│   │   ├── profile/      # 个人中心
│   │   └── pricing/      # 价格方案
│   ├── components/       # React 组件
│   │   ├── ui/           # UI 组件库
│   │   ├── blocks/       # 业务组件
│   │   ├── contexts/     # Context Provider
│   │   └── hooks/        # 自定义 Hooks
│   └── lib/              # 工具函数
├── public/               # 静态资源
├── start.bat             # 一键启动脚本
└── dev.bat               # 开发助手菜单
```

## 技术栈

- **框架**: Next.js 15 (App Router)
- **UI 库**: React 19
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **UI 组件**: shadcn/ui
- **图标**: Lucide React, React Icons

## 功能特性

- ✨ AI 智能对话与实验辅助
- 🔬 虚拟仿真实验环境
- 📊 数据分析与可视化
- 🔐 用户认证与权限管理
- 🌓 深色/浅色主题切换
- 📱 响应式设计

## 访问地址

开发环境: http://localhost:3000

## 许可证

© 2026 NovaMat AI. 保留所有权利。
