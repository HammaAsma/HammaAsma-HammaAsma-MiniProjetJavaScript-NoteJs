import express from "express";
import router from "./routes/route.js";

const app=express();
const PORT=process.env.PORT || 3000;



app.use(express.json())

app.use('/api/resources',router)

app.listen(PORT,()=>{
    console.log(`Serveur lancé sur le port : ${PORT}`);
});