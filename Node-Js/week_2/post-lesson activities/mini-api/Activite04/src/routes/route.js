import express from "express";
import AppError from "../middlewares/AppError.js";
const router=express.Router();


router.get("/resources",(req,res,next)=>{
   return  next(new AppError('Resource not found', 404))
});


export default router;