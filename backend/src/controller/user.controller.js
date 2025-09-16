import { User } from "../modules/user.moduls.js"
import { ApiError } from "../utils/apierror.js";
import validator from "validator";
import bcrypt from "bcrypt"
import ApiResponse from "../utils/apiresponse.js";




export const registerUser= async(req,res,next)=>{
    console.log("veekesh")
 console.log(req.body); 
 const {name,email,possword} = req.body

 const exis= await User.findOne({email});
 if(exis){
    res.status(401).json( new ApiError(401,"User is allready exist"));
 }
 if(!validator.isEmail()){
   res.status(401).json( new ApiError(401," invailid  User email "));
 }
 if(possword.lenghth<8){
res.status(401).json( new ApiError(401,"please enter a strong posswor"));
 }
 const salt=await bcrypt.gensalt(10);
 const haspossword= bcrypt.hash(possword,salt);
 const user =new User({
    name:name,
    email:email,
    password:haspossword,
 })
    await user.save();
    res.json(new ApiResponse(201,"user created successfully"));
}
// export const loginUser=(req,res,next)=>{

// }