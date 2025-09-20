import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apierror.js";
import { User } from "../modules/user.moduls.js";

export const jwtverifyToken=asyncHandler(async(req,res,next)=>{
  try {
   const token=req.cookie?.accessToken || req.header("Authorization")?.replace("Bearer","");
     
   if(!token){
    res.status(401).json(new ApiError(401," Unathorized user"))
   }

     const decoded=jwt.verify({
       token
     },process.env.SCREATE_TOKEN_KEY)
      console.log(decoded);
     const user= await User.findById(decoded._id);
 if (!user) {
        throw new ApiError(401,"user does not exist");
    }
     req.user=user;

     next()
  } catch (error) {
    throw new ApiError(401,error.messase || "Invailid user token")
  }

})