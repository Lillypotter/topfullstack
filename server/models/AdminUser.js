const mongoose = require('mongoose');
 
const schema = new mongoose.Schema({
 
    username: { type: String },
    password: {
        type: String,
        select: false,
        set(val) {
   			//val接收的是从前端传来的用户的密码
            const bcrypt = require('bcryptjs');
            const hash = bcrypt.hashSync(val, 10);
            return hash
        }
    }
 
});
 
module.exports = mongoose.model('AdminUser', schema);