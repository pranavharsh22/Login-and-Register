import express from "express";
import cors from "cors";
import mongoose from "mongoose"

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/myLoginRegisterDB').then(() => {
    console.log('Connected to MongoDB');
  });
  const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
  })
const User=new mongoose.model("User",userSchema)





//ROUTES

app.post("/login",async(req,res)=>{
    const{email,password}=req.body
    let user=await User.findOne({email:req.body.email})
    if(user){
      if(password===user.password){
        res.send({message:"login successfully",user:user})
      }else{
        res.send({message:"password didnt matched"})
      }

    }else{
      res.send({message:"user not registered"})
    }
})
app.post("/register",async(req,res)=>{
    const{name,email,password}=req.body
    let user = await User.findOne({ email: req.body.email });
    if(user){
      return res.send({message:"user already exist"})
    }else{
      const user=new User({
        name,
        email,
        password
      })
      await user.save();
      res.send({message:"successfully registered, Please Login Now"})
    }

    
});

app.listen(9002,()=>{
    console.log("started at port 9002")
})