// ========================================
// 团队成员配置示例
// ========================================

import { TeamMember } from '@/components/ui/team-showcase';

// 示例 1: 完整信息（包含所有社交媒体）
const exampleFull: TeamMember = {
  id: '1',
  name: '张明博士',
  role: '首席执行官 / 创始人',
  image: 'https://images.unsplash.com/photo-1507003218682-3e8c2b8e5b7d?w=400&h=400&fit=crop&crop=face',
  social: { 
    weibo: 'https://weibo.com/u/123456',           // 新浪微博
    linkedin: 'https://www.linkedin.com/in/...',   // LinkedIn
    douyin: 'https://www.douyin.com/user/...',     // 抖音
    bilibili: 'https://space.bilibili.com/...',    // B站
  },
};

// 示例 2: 简单信息（只包含部分社交媒体）
const exampleSimple: TeamMember = {
  id: '2',
  name: '李婷婷',
  role: '首席技术官',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  social: { 
    weibo: 'https://weibo.com/u/123456',
    linkedin: 'https://www.linkedin.com/in/...',
  },
};

// 示例 3: 最简信息（无社交媒体）
const exampleMinimal: TeamMember = {
  id: '3',
  name: '王浩然',
  role: 'AI 研究主管',
  image: 'https://images.unsplash.com/photo-1472099645-8a5f5c6b7b8d?w=400&h=400&fit=crop&crop=face',
};

// ========================================
// 头像图片来源推荐
// ========================================

// 1. Unsplash（推荐）- 高质量真实照片
const unsplashAvatars = [
  'https://images.unsplash.com/photo-1507003218682-3e8c2b8e5b7d?w=400&h=400&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645-8a5f5c6b7b8d?w=400&h=400&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438767303578-9585760f7c55?w=400&h=400&fit=crop&crop=face',
];

// 2. Pravatar（随机头像）- 快速测试用
const pravatarAvatars = [
  'https://i.pravatar.cc/400?img=1',
  'https://i.pravatar.cc/400?img=2',
  'https://i.pravatar.cc/400?img=3',
];

// ========================================
// 社交媒体平台说明
// ========================================

/*
| 字段名    | 平台       | 图标显示   | 建议链接格式                    |
|----------|-----------|-----------|--------------------------------|
| weibo    | 新浪微博    | 微博图标   | https://weibo.com/u/[用户ID]   |
| linkedin | LinkedIn  | LinkedIn  | https://www.linkedin.com/in/...|
| douyin   | 抖音       | 抖音图标   | https://www.douyin.com/user/...|
| bilibili | 哔哩哔哩   | B站图标    | https://space.bilibili.com/... |
*/

// ========================================
// 完整配置示例
// ========================================

export const exampleTeamConfig = {
  title: '核心团队',
  description: '来自全球顶尖科研机构的专家团队',
  members: [
    {
      id: '1',
      name: '张明博士',
      role: '首席执行官 / 创始人',
      image: 'https://images.unsplash.com/photo-1507003218682-3e8c2b8e5b7d?w=400&h=400&fit=crop&crop=face',
      social: { 
        weibo: 'https://weibo.com',
        linkedin: 'https://www.linkedin.com',
      },
    },
    {
      id: '2',
      name: '李婷婷',
      role: '首席技术官',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      social: { 
        weibo: 'https://weibo.com',
        linkedin: 'https://www.linkedin.com',
      },
    },
  ],
};