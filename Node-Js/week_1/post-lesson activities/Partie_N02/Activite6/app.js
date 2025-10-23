const http =require("http");// n importiw module http bach n créyiw serveur
const Logger=require("./logger");// n importiw class Logger men fichier logger.js
const logger =new Logger();// n créyiw  une instance de Logger
logger.on("messageLogged", (data)=>// n sm3o l'événement "messageLogged"
    console.log("Evénement capturé :",data)
);
const server=http.createServer((req,res)=>{// n créyiw serveur
    logger.log(`Requête reçue : ${req.url}`);// kol mara katjina request, n ktebha f log.txt
    res.end("Requête enregistrée !");//requête tktbat f log.txt
});
// serveur kaytsanna f port 4000
server.listen(4000,()=>console.log("Serveur sur le port 4000..."));
