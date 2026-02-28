# RSS Proxy (Vercel)

一个基于 Vercel Edge Functions 的简单代理服务，用于解决跨域访问问题。

## 功能

- 代理任意 URL 请求
- 自动添加 CORS 头
- 支持 RSS/Atom 等内容获取
- 使用 Vercel 边缘网络，全球部署

## 部署步骤

### 1. 创建 GitHub 仓库

```bash
gh repo create rss-proxy-vercel --public --source=.
git push -u origin main
```

### 2. 连接到 Vercel

访问 [vercel.com](https://vercel.com) 并使用 GitHub 账号登录

### 3. 导入项目

1. 点击 "Add New Project"
2. 选择刚创建的 `rss-proxy-vercel` 仓库
3. 点击 "Deploy"

### 4. 获取你的代理地址

部署完成后，你会得到一个类似 `https://rss-proxy-vercel.vercel.app` 的地址

## 使用方法

```
https://your-project.vercel.app/api?url=https://example.com/feed.xml
```

## 示例

- 代理 RSS: `?url=https://feeds.feedburner.com/oreilly/radar`
- 代理网页: `?url=https://example.com`

## 注意事项

- 请遵守目标网站的使用条款
- 仅用于合法的数据获取场景
- 建议添加速率限制以防止滥用
