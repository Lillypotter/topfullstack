// 导入数据库
const mongoose=require('mongoose');
// 创建数据库的规则
const schema=new mongoose.Schema({
    name:{type:String},
    icon:{type:String}
    //parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}
})

module.exports=mongoose.model('Item',schema)