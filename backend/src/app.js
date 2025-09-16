import express from "express";
import {connectDB} from "../src/db/database.js"
import cors from "cors";
// import dotenv from "dotenv"
// dotenv.config({
//     path:"./.env",
// });
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/image",express.static('public/temp'));

import foodRouter from "./routers/foodRoutes.js"
import userRoute from "./routers/user.Routes.js";

app.use("/api/users/", userRoute)
app.use("/api/food/",foodRouter)


connectDB().then(()=>{
app.listen(process.env.PORT||5000,()=>{
    console.log("server is listening on PORT: ",process.env.PORT||5000)
} )
}).catch(error=>{
    console.log(error);
})
