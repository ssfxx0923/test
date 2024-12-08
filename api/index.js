const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 静态文件服务
app.use(express.static('public'));

// 环境变量
const API_KEY = process.env.LINK_AI_API_KEY;
const API_URL = process.env.LINK_AI_API_URL || 'https://api.link-ai.tech/v1/chat/completions';

// 聊天接口
app.post('/api/chat', async (req, res) => {
    try {
        const { messages, model = 'linkai-4o-mini', stream = true } = req.body;

        console.log('Received request:', { messages, model, stream });
        console.log('API URL:', API_URL);

        // 确保 URL 是完整的
        const apiUrl = new URL(API_URL);
        
        const apiResponse = await fetch(apiUrl.toString(), {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: messages,
                model: model,
                stream: stream
            })
        });

        if (!apiResponse.ok) {
            const errorText = await apiResponse.text();
            console.error('API Error:', errorText);
            return res.status(apiResponse.status).json({ 
                error: errorText,
                status: apiResponse.status 
            });
        }

        // 设置响应头
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // 直接管道传输响应
        apiResponse.body.pipe(res);

        // 处理结束和错误
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

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ 
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

// 健康检查接口
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// 为 Vercel 导出
module.exports = app; 