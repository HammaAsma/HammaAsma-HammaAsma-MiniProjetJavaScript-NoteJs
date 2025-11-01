import express from "express";
import dotenv from "dotenv";
import router from "./routes/route.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js"

const app=express();
const PORT=process.env.PORT || 3000;

app.use(logger);

app.use(router);

app.use(errorHandler);


app.listen(PORT,()=>{
    console.log(`Serveur lancé sur le port : ${PORT}`);
});