# 项目结构说明

## 目录结构

项目根目录/
├── api/                   # 后端API目录
│   └── index.js          # Node.js服务器代码
│
├── public/               # 静态文件目录
│   ├── images/          # 背景图片目录
│   │   ├── bg01.jpg    # 背景图片1 (610KB)
│   │   ├── bg02.jpg    # 背景图片2 (1.68MB)
│   │   ├── bg03.jpg    # 背景图片3 (1.09MB)
│   │   ├── bg04.jpg    # 背景图片4 (1.71MB)
│   │   ├── bg05.jpg    # 背景图片5 (1.17MB)
│   │   ├── bg06.jpg    # 背景图片6 (938KB)
│   │   ├── bg07.jpg    # 背景图片7 (2.44MB)
│   │   ├── bg08.jpg    # 背景图片8 (1.26MB)
│   │   ├── bg09.jpg    # 背景图片9 (1.02MB)
│   │   ├── bg10.jpg    # 背景图片10 (1.43MB)
│   │   ├── bg11.jpg    # 背景图片11 (1.99MB)
│   │   ├── bg12.jpg    # 背景图片12 (1.02MB)
│   │   └── bg13.jpg    # 背景图片13 (1.85MB)
│   │
│   ├── api.js          # API接口封装 (2.02KB)
│   ├── games.js        # 游戏逻辑实现 (15.56KB)
│   ├── index.html      # 主页面 (6.90KB)
│   ├── script.js       # 主要JavaScript逻辑 (8.04KB)
│   └── styles.css      # 样式表 (16.70KB)
│
├── .env                 # 环境变量配置
├── .gitignore          # Git忽略文件
├── package.json        # 项目配置文件
├── CHANGELOG.md        # 更新日志
└── vercel.json         # Vercel部署配置

## 主要文件说明

### 前端文件
- `index.html`: 主页面，包含聊天界面和游戏界面的HTML结构
- `styles.css`: 所有的样式定义，包括动画效果
- `script.js`: 主要的JavaScript逻辑，处理UI交互和聊天功能
- `games.js`: 游戏相关的逻辑，包含贪吃蛇和扫雷两个游戏
- `api.js`: API通信相关的封装

### 后端文件
- `api/index.js`: Node.js服务器，处理与Link AI API的通信

### 资源文件
- `images/`: 存放背景图片的目录，包含13张轮播背景图

## 功能模块

1. **聊天系统**
   - AI对话功能
   - 消息显示和动画
   - 实时响应

2. **游戏系统**
   - 贪吃蛇游戏
   - 扫雷游戏
   - 游戏状态管理

3. **UI组件**
   - 背景图片轮播
   - 可折叠的聊天窗口
   - 可折叠的游戏窗口
   - 快捷按钮
   - 社交媒体链接

## 运行说明

1. 启动服务器：
   ```bash
   npm run dev
   ```

2. 访问应用：
   - 打开浏览器访问 `http://localhost:3000`

## 注意事项

1. 确保安装所需依赖：
   ```bash
   npm install
   ```

2. 图片资源较大，首次加载可能需要一定时间
3. 需要通过HTTP服务器访问，不能直接打开HTML文件

## 环境依赖

### Node.js环境
1. Node.js 14+
2. 必需的Node.js包：
   ```bash
   npm install express cors node-fetch dotenv
   ```
   或使用package.json安装：
   ```bash
   npm install
   ```

### 前端依赖
1. Font Awesome 6.0.0
   - 已通过CDN引入：
   ```html
   <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
   ```

## 部署说明

### 本地部署
1. 克隆或下载项目文件
2. 安装所需依赖
3. 启动服务器
4. 访问应用

### Vercel部署
1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 配置环境变量
4. 部署完成后即可访问

## 配置说明

### API配置
在 `.env` 文件中配置：