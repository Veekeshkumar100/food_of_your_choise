import  {  User}  from "../modules/user.moduls.js";
import ApiResponse from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const addToCart=asyncHandler(async(req,res,next)=>{
const user=await User.findById(req.user._id);
const cartData= await user.cartData;

if(!cartData[req.body.itemId]){
 cartData[req.body.itemId]=1;
}else{
cartData[req.body.itemId] +=1;
}

  const User=await User.findByIdAndUpdate(req.user._id,{cartData});


  res.json(new ApiResponse(200,User,"cart created"))

})
const removeFromCart=asyncHandler(async(req,res,next)=>{
    
})
const getCart=asyncHandler(async(req,res,next)=>{
    
})

export {addToCart,removeFromCart,getCart};