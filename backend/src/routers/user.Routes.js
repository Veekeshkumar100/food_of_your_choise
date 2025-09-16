import express from "express"
import { registerUser } from "../controller/user.controller.js";
const userRoute=express.Router();

userRoute.post("/register",registerUser);
// userRoute.post("/login",loginUser);


export default userRoute;