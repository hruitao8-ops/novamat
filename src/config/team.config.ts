import { TeamMember } from '@/components/ui/team-showcase';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '黄锐涛 - RuiT Huang',
    role: 'CEO',
    image: '/images/team/team-1-huangruitao.png', // 本地图片路径
    social: { 
      weibo: 'https://weibo.com',
      linkedin: 'https://www.linkedin.com',
    },
  },
  {
    id: '2',
    name: '鲁柳请 - LiuQ Lu',
    role: 'CTO',
    image: '/images/team/team-2-luliuqing.png', // 本地图片路径
    social: { 
      weibo: 'https://weibo.com',
      linkedin: 'https://www.linkedin.com',
    },
  },
  {
    id: '3',
    name: '林乙钦 - YiQ Lin',
    role: 'Head of AI Research',
    image: '/images/team/team-3-linyiqin.png', // 本地图片路径
    social: { 
      weibo: 'https://weibo.com',
      linkedin: 'https://www.linkedin.com',
    },
  },
  {
    id: '4',
    name: '冯玮程 - WeiC Feng',
    role: 'Product Design Director',
    image: '/images/team/team-4-fengweicheng.png', // 本地图片路径
    social: { 
      linkedin: 'https://www.linkedin.com',
      douyin: 'https://www.douyin.com',
    },
  },
  {
    id: '5',
    name: '刘佳敏 - JM Liu',
    role: 'Front-end Dev Lead',
    image: '/images/team/team-5-liujiamin.png', // 本地图片路径
    social: { 
      weibo: 'https://weibo.com',
      linkedin: 'https://www.linkedin.com',
    },
  },
  {
    id: '6',
    name: '李泳茵 - YongY Li',
    role: 'Big Data R&D Director',
    image: '/images/team/team-6-liyongyin.png', // 本地图片路径
    social: { 
      douyin: 'https://www.douyin.com',
    },
  },
];

export const teamSectionConfig = {
  title: '我们的团队',
  description: '来自广东工商职业技术大学，人工智能与大数据学院学生',
  members: teamMembers,
};