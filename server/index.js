// 引入express
 const express=require("express");
 const path = require('path')
// 创建express实例
const app=express()

app.set('secret','asbddss')

app.use('/uploads',express.static(__dirname+'/uploads'))

// app.use('/uploads',express.static(path.join(__dirname,'uploads'))) // 用

app.use(require('cors')())
app.use(express.json())

//导入数据库
require('./plugins/db')(app)
// 在 index.js 中，导入新建分类路由模块
require('./routes/admin/index')(app)
require('./routes/web/index')(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})