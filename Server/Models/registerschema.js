var mongoose = require('mongoose');

const userdataschema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    confirmpassword:{
        type:String,
    },
    Active:{
        type:Number,
        default:1
    }
})


module.exports = mongoose.model('userdata',userdataschema)