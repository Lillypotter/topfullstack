// 导入数据库
const mongoose=require('mongoose');
// 创建数据库的规则
const schema=new mongoose.Schema({
    name:{type:String},
    banner:{type:String},
    avatar:{type:String},
    title:{type:String},
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    scores:{
        difficult:{type:Number},
        skills:{type:Number},
        attack:{type:Number},
        survive:{type:Number}

    },
    skills:[{
        icon:{type:String},
        name:{type:String},
        description:{type:String},
        tips:{type:String}

    }],
    //是从物品的数据表里面选中对应的武器，用关联
    //顺风出装
    items1:[{
        type:mongoose.SchemaTypes.ObjectId,ref:'Item'
    }],
    //逆风出装
    items2:[{
        type:mongoose.SchemaTypes.ObjectId,ref:'Item'
    }],
    //技巧
    usageTips:{type:String},
    battleTips:{type:String},
    teamTips:{type:String},
    partners:[{
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
        description:{type:String}
    }]
    //parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}
})

module.exports=mongoose.model('Hero',schema,'heroes')