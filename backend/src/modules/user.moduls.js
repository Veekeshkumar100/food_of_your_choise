import mongoose  from "mongoose";
import bcrypt, { genSalt } from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema=new mongoose.Schema({
name:{type:String,require:true},
email:{type:String,require:true,unique:true},
password:{type:String,require:true,unique:true},
cartData:{type:Object,default:{}},
},{minimize:false})

userSchema.pre("save", async function(next){
      if(!this.isModified("password")) return next() ;
      
      this.password= await bcrypt.hash(this.password,12)
      next()
})
  
userSchema.methods.generataccessToken=function(){
     return jwt.sign({
        _id:this._id
     },process.env.SCREATE_TOKEN_KEY)   
}

userSchema.methods.isCorrectPassWord= async function(password){
     return await  bcrypt.compare(password,this.password);  
}

export const User=mongoose.model("User",userSchema);
