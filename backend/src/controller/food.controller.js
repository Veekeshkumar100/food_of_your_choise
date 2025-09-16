import { foodModel } from "../modules/foodmoduls.js";
import ApiResponse from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apierror.js";
import  fs  from "fs";


export const createFood=asyncHandler(async(req,res,next)=>{
    console.log(req.body);
    const {name,description,price ,category}=req.body;
    const image=req.file.filename;
    console.log(req.file);



    if(!name || !description || !price || !image){
        return res.status(400).json({
            success:false,
            message:"please provide all the fields"
        })
    }

    const food = new foodModel({ name, description, price, image ,category})
    await food.save();
    return res.status(201).json(new ApiResponse(201, food, "food created successfully"))
})

 export const  listFood=asyncHandler(async(req,res,next)=>{
    const foods= await foodModel.find();
    console.log(foods);

    // if(!foods){
    //   throw new ApiError(501,"data not found");
    // }
       return res.status(200).json(new ApiResponse(200,foods,"food list fetched successfully"));
    })



export const removeFood=asyncHandler(async(req,res,next)=>{
    // console.log("id",req.body);
   const food =await foodModel.findByIdAndDelete(req.body.id);
   
    if(!food){
        throw new ApiError(404,"food not found");
    }
    fs.unlink(`public/temp/${food.image}`,(err)=>{
        if(err){
            console.log(err);
        }
    })
    return res.status(200).json(new ApiResponse(200,food,"food deleted successfully"));
})


