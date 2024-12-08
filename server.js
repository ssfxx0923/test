const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/proxy/chat', async (req, res) => {
    // ... 处理聊天请求的逻辑
});

app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
}); 