// 导入数据库
const mongoose=require('mongoose');
// 创建数据库的规则
const schema=new mongoose.Schema({
    name:{type:String},
    items:[{
        image:{type:String},
        url:{type:String},
    }]
})

module.exports=mongoose.model('Ad',schema)