const EventEmitter=require("events");// n importiw module "events" bach nkhdmo b l'événements
class Logger extends EventEmitter{// nkhlqo wahd class Logger li kat Eyrita  men EventEmitter
    log(message){// had méthode "log" kat affichi lina message w kat3yet 3la l événement
        console.log("LOG :",message);
        this.emit("messageLogged",{message,date:new Date()});//kat emit événement smito messageLogged  w kat sifet ma3ah message w date
    }
}
// kan exportiw  class Logger bach n9dro n importiwha f fichier app
module.exports=Logger;