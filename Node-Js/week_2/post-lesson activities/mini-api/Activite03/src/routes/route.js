import express from "express";
import auth from "../middlewares/auth.js";
import timer from "../middlewares/timeLimiter.js"
const router=express.Router();


router.get("/api/private",auth.authentification,timer.timerLimiter,(req,res)=>{
    
    res.send('Bienvenue !');
});


export default router;