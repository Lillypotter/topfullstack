module.exports=app=>{
    const express=require('express')
    const jwt=require('jsonwebtoken');
    const assert=require('http-assert')
    //根据用户名找用户
    const AdminUser=require(`../../models/AdminUser`)
    const router=express.Router(
        // 拿到模型的名字
        {mergeParams:true}
    )
//登录校验中间件
const auth=async(req, res,next) =>{
    const token=String(req.headers.authorization||'').split(' ').pop();
    if(!token){
        return res.status(401).send({
            message:'请先登录'
        })
    }
    const {id}=jwt.verify(token,app.get('secret'))
    if(!id){
        return res.status(401).send({
            message:'请先登录'
        })
    }
    req.user=await AdminUser.findById(id);
    if(!req.user){
        return res.status(401).send({
            message:'请先登录'
        })
    }
    // console.log(req.user)
    await next();
}

    router.post('/',async(req,res)=>{
       
        const model=await req.Model.create(req.body);
        res.send(model)
    })

    //分类列表接口
    router.get('/',auth,async(req, res) => {
        console.log(req.Model.modelName + '   get');
        const queryOption = {};
        if (req.Model.modelName == 'Category') {
            queryOption.populate = 'parent';
        }
        const items = await req.Model.find().setOptions(queryOption).limit(100); //限制最多十条数据
        res.send(items);
    }
);

    //编辑
    router.put('/:id',async(req,res)=>{
        const model=await req.Model.findByIdAndUpdate(req.params.id,req.body);
        res.send(model)
    })

    //删除
    router.delete('/:id',async(req,res)=>{
        await req.Model.findByIdAndDelete(req.params.id,req.body);
        res.send({
            success:true
        })
    })
    router.get('/:id',async(req,res)=>{
        const model=await req.Model.findById(req.params.id);
        res.send(model)
    })
    
// 建立CRUD接口
//要加入回调函数
    app.use('/admin/api/rest/:resource',auth,async(req,res,next)=>{
        const modelName=require('inflection').classify(req.params.resource)
        req.Model =require(`../../models/${modelName}`)
        next()
    },router)

    //上传中间件
    const multer=require('multer')
    const upload=multer({dest:__dirname+'/../../uploads'});
    app.post('/admin/api/upload',auth,upload.single('file'),async(req,res)=>{
        const file=req.file;
        file.url=`http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
    //登录页面
    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body
        // 1.根据用户名找用户
    
        const user = await AdminUser.findOne({ username }).select('+password')
        assert(user, 422, '用户不存在')
        // 2.校验密码
        const isValid = require('bcrypt').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')
        // 3.返回token
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({ token })
      })



    //错误处理
    app.use(async(error,req,res,next)=>{
        //console.log(error)
        res.status(error.statusCode||500).send({
            message:error.message
        })
    })
}