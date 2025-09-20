import express from "express"
import { addToCart, getCart, removeFromCart } from "../controller/cart.controller.js";
import { jwtverifyToken } from "../controller/auth.Controller.js";

const cartRouter =express.Router();

cartRouter("/add",jwtverifyToken,addToCart)
cartRouter("/remove",removeFromCart)
cartRouter("/getdata",getCart)

export {cartRouter}
