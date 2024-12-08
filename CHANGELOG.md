# 更新日志

## [1.0.1] - 2024-03-14

### 修复
- 修复了 Vercel 部署时的流式响应问题
- 优化了 API 错误处理机制

### 具体更改
1. **API 响应处理优化**
   - 将 Web API 的 `getReader()` 方法改为 Node.js 的 `pipe()` 方法
   - 添加了正确的流结束和错误处理
   - 优化了响应头设置

2. **环境变量配置**
   - 添加了默认的 API URL 配置
   - 使用 URL 构造函数确保 URL 格式正确

### 关键代码更改
```javascript
// 之前的问题代码
const reader = apiResponse.body.getReader();
const decoder = new TextDecoder();
// 手动处理流式响应...

// 修复后的代码
apiResponse.body.pipe(res);

// 添加proper错误处理
apiResponse.body.on('end', () => {
    res.end();
});

apiResponse.body.on('error', (error) => {
    console.error('Stream Error:', error);
    if (!res.headersSent) {
        res.status(500).json({ error: 'Stream processing error' });
    }
    res.end();
});
```

### 遇到的问题
1. **TypeError: getNodeRequestOptions**
   - 原因：node-fetch 需要完整的 URL
   - 解决：使用 URL 构造函数确保 URL ���整性

2. **TypeError: apiResponse.body.getReader is not a function**
   - 原因：在 Node.js 环境中不支持 Web API 的 getReader 方法
   - 解决：使用 Node.js 原生的 pipe 方法处理流

### 部署步骤
1. 确保项目结构正确：
   ```
   项目根目录/
   ├── api/
   │   └── index.js           # Node.js 服务器代码
   ├── public/               # 静态文件目录
   │   ├── images/           # 背景图片
   │   ├── index.html
   │   ├── styles.css
   │   ├── api.js
   │   ├── games.js
   │   └── script.js
   ├── .env
   ├── .gitignore
   ├── package.json
   └── vercel.json
   ```

2. 配置 Vercel 环境变量：
   - `LINK_AI_API_KEY`
   - `LINK_AI_API_URL`

3. 确保 vercel.json 配置正确：
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "api/index.js",
         "use": "@vercel/node"
       },
       {
         "src": "public/**",
         "use": "@vercel/static"
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "/api/index.js"
       },
       {
         "src": "/(.*)",
         "dest": "/public/$1"
       }
     ]
   }
   ```

### 经验总结
1. 在 Node.js 环境中使用流时，优先考虑 Node.js 原生的流处理方法
2. 确保正确处理流的结束和错误情况
3. 在 Vercel 部署时注意环境变量的配置
4. 使用适当的日志记录有助于问题诊断

## [1.0.0] - 2024-03-14
- 初始版本发布
- 实现基本的聊天功能
- 实现游戏功能（贪吃蛇和扫雷） 