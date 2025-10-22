const fs=require("fs");// n importiw module fs bach nkhdmo 3la les fichiers
const EventEmitter=require("events");// n importiw module events bach nkhdmo b l'événements
class Logger extends EventEmitter{// n khlqo class Logger li kat Eyrite men EventEmitter
    log(message){// méthode log : katcriyi message f fichier w katsift événement
        fs.appendFileSync("log.txt",message + "\n");// katzid l message f fichier log.txt (ila ma kaynch katcriyih)
        this.emit("messageLogged",{message,date:new Date()}); // kat emit événement "messageLogged" ma3a message w date

    }
}
// n exportiw class Logger bach n9dro n importiwha f fichier app
module.exports=Logger;