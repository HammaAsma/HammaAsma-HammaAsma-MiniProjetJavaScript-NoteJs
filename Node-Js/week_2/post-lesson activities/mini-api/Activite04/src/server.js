import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import route from './routes/route.js'

const app=express();
const PORT=process.env.PORT || 3000;

app.use(route);

app.use(errorHandler);


app.listen(PORT,()=>{
    console.log(`Serveur lancé sur le port : ${PORT}`);
});