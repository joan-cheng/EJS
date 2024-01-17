const express = require('express');
const indexRouter = express.Router();

// 定義路由
indexRouter.get('/', (req, res) => {
    res.render('index');
});

indexRouter.get('/second', (req, res) => {
    res.render('second');
});




module.exports = indexRouter;
