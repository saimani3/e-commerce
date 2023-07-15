var mongoose = require('mongoose');

const Itemschema = new mongoose.Schema({
    Productid: { 
        type: Number, 
        unique: true
     },
    Productname:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    ProductImage:{
        type:String,
        required:true
    },
    ProductType:{
        type:String,
        required:true
    },
    Active:{
        type:Number,
        default:1
    }
})


module.exports = mongoose.model('productdata',Itemschema)