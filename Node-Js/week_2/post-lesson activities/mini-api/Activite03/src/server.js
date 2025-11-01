import express from "express";
import route from "./routes/route.js"

const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.json());


app.use(route)

app.listen(PORT,()=>{
    console.log(`Serveur lancé sur le port : ${PORT}`);
});