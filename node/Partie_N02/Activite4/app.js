const Logger=require("./logger");// n importiw class Logger li exportinaha f fichier logger
const logger=new Logger();// n déclariw wahd instance men class Logger
logger.on("messageLogged",(data)=>{// nsm3o l'événement "messageLogged"
    console.log("Evenement capturé :",data);
});
logger.log("Application démarrée !");// n3eyto l-méthode log bach nsift message