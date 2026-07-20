# 团队成员照片目录

## 📁 目录说明

此目录用于存放团队成员的头像照片。

## 📋 文件命名规范

```
team-[id]-[name].jpg
```

示例：
- `team-1-zhangming.jpg` - 张明博士
- `team-2-litingting.jpg` - 李婷婷
- `team-3-wanghaoran.jpg` - 王浩然
- `team-4-chenyuxin.jpg` - 陈雨欣
- `team-5-liuweiqiang.jpg` - 刘伟强
- `team-6-zhaoxiaoyan.jpg` - 赵小燕

## 🖼️ 图片要求

### 尺寸规格
- **推荐尺寸**: 400x400 像素
- **最小尺寸**: 200x200 像素
- **最大尺寸**: 800x800 像素
- **宽高比**: 1:1 (正方形)

### 文件格式
- **推荐**: JPG / JPEG
- **支持**: PNG, WebP
- **不支持**: BMP, GIF, TIFF

### 文件大小
- **推荐**: 50-200 KB
- **最大**: 500 KB

## 📸 拍摄建议

### 背景
- 纯色背景（白色、浅灰色）
- 或简洁的办公环境
- 避免杂乱背景

### 光线
- 充足的自然光
- 避免强烈阴影
- 面部清晰可见

### 表情
- 自然微笑
- 专业、亲和
- 眼神看向镜头

### 着装
- 职业装或商务休闲
- 避免过于花哨的图案
- 颜色简洁大方

## 🔄 如何替换照片

### 方法一：直接替换
1. 准备好符合要求的照片
2. 按照命名规范重命名
3. 替换到此目录
4. 刷新浏览器查看效果

### 方法二：使用在线头像
如果暂时没有照片，可以使用在线头像服务：

```typescript
// Unsplash（高质量真实照片）
image: 'https://images.unsplash.com/photo-[ID]?w=400&h=400&fit=crop&crop=face'

// Pravatar（随机生成头像）
image: 'https://i.pravatar.cc/400?img=[1-70]'
```

## 📝 配置文件引用

在 `src/config/team.config.ts` 中引用本地图片：

```typescript
{
  id: '1',
  name: '张明博士',
  role: '首席执行官 / 创始人',
  image: '/images/team/team-1-zhangming.jpg', // 本地图片
  social: { 
    weibo: 'https://weibo.com',
    linkedin: 'https://www.linkedin.com',
  },
}
```

## ⚠️ 注意事项

1. **统一风格**: 所有照片风格应保持一致
2. **版权问题**: 确保照片有使用权
3. **隐私保护**: 获得本人同意后使用
4. **定期更新**: 及时更新过时的照片

## 🔧 图片优化工具

### 在线工具
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- ImageOptim: https://imageoptim.com/

### 本地工具
- Photoshop
- GIMP
- Figma

---

如有疑问，请联系项目负责人。