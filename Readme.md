上传github指南
https://blog.csdn.net/a_1_1_1_2/article/details/118095140?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-118095140-blog-106856499.235%5Ev38%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-118095140-blog-106856499.235%5Ev38%5Epc_relevant_anti_vip&utm_relevant_index=5

关于项目
基于nodejs和vuejs的英雄联盟部分数据的后台管理系统和前端展示，服务器用nodejs写后端接口，用于数据库的增删改查
前端技术栈：vue全家桶，element-UI，axios, scss, flex+rem布局
后端技术栈：Node，mongodb

项目工作：
后台管理前端
1、用element-UI搭建后台管理页面
2、用axios向后端数据库发送增删改查的请求
3.用JWT验证机制来实现登录，beforeEach和meta来防止非法访问
后端：
1.用CRUD来优化后端接受增删改查的请求的接口，多个模型共用一个接口
2.创建初始化数据，并添加进数据库（mongodb）
3.创建展示数据接口，使用聚合查找
移动端前端：
用flex+rem布局来搭建移动端，scss来写样式


## 安装

**安装nodemon**

 npm i nodemon -g

**创建index.js文件**

**启动文件**

`npx nodemon 文件地址`，就可以启动成功

安装express,数据库，跨域请求

npm i express@next mongoose cors

安装token

npm i jsonwebtoken

## 创建数据库

用mongodb创建
