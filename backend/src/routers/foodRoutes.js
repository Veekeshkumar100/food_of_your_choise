import express from "express";
const foodRouter=express.Router();
import multer from "multer";
import { createFood, listFood ,removeFood } from "../controller/food.controller.js";

const storage=multer.diskStorage({
    destination:"./public/temp",
    // destination:function(req,file,cb){
    //     cb(null,")
    // },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`);
    }
});


const upload=multer({storage:storage});

foodRouter.post("/add",upload.single("image"), createFood);
foodRouter.get("/list", listFood);
foodRouter.delete("/delete/:id",removeFood);

export default foodRouter;


