const express = require("express");
// const cors = require("cors");
const app = express();
// app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
var productdata = require('./Models/Itemdetailschema');
var userdata = require('./Models/registerschema');
const { getNextSequenceValue } = require('./Models/uniquid');
mongoose.connect("mongodb://127.0.0.1:27017/nsmfood")
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));




app.post("/post",async(req,res)=>{
    const nextId = await getNextSequenceValue('productId');
    const {Productname,Description,Price,ProductImage,ProductType} = req.body;
    var postdata= {
        Productid: nextId,
        Productname:Productname.toString(),
        Description:Description.toString(),
        Price:Price.toString(),
        ProductImage:ProductImage.toString(),
        ProductType:ProductType.toString(),
    }
    const data = new productdata(postdata)
    data.save().then(response=>{
        res.json("Product add successfully");
    }).catch(err=>{
        if(err){
            console.log('error',err)
        }
    })
})

app.get("/getdata",async(req,res)=>{
    try{
   const getalldata = await productdata.find({"Active":"1"})
   res.json(getalldata);
    }catch(error){
        console.log(error);
    }
})


app.get("/delete/:Productid",async(req,res)=>{
    var Productid = req.params.Productid;
    // await productdata.findByIdAndUpdate(Productid,{Active : '0'})
    await productdata.findOneAndUpdate({Productid},{Active : '0'})
    res.json("Product Deleted Successfully")
            // res.json("Something went wrong!")
    // res.json(data) 
    })

app.post("/updatedata/:Productid",async(req,res)=>{
        var Productid = req.params.Productid;
        const update = {
            Productname:req.body.Productname,
        Description:req.body.Description,
        Price:req.body.Price,
        ProductImage:req.body.ProductImage,
        ProductType:req.body.ProductType,
        }
        await productdata.findOneAndUpdate(Productid,update)
        res.json("Product Updated Successfully")
                // res.json("Something went wrong!")
        // res.json(data) 
        })
    


app.post("/register",async(req,res)=>{
    const {name,email,password,confirmpassword} = req.body;
            var usersdata= {
                name:name.toString(),
                email:email.toString(),
                password:password.toString(),
                confirmpassword:confirmpassword.toString(),
            }
            const data = new userdata(usersdata)
            data.save().then(response=>{
                res.json("Register Successfully");
            }).catch(err=>{
                if(err){
                    console.log('error',err)
                }
            })
        })


app.post("/login",async(req,res)=>{
    const {Email,Password} = req.body;
  try{
    const logindata= await userdata.findOne({email:Email.toString(),password:Password.toString()})
    if(logindata){
     res.json("Login Success");
    }
     else{
        res.json("username and password is incorrect")
     }
     }catch(error){
        console.log(error);
     }
})



app.listen(5000,
    console.log("server listing on port 5000")
);
