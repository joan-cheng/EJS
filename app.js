const express = require('express');
const app = express();

// 設定 EJS 為模板引擎
app.set('view engine', 'ejs');

// 設定靜態檔案目錄
app.use(express.static('public'));

// 定義路由
const indexRouter = require('./routes/index');
app.use('/',indexRouter);

// 啟動伺服器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
