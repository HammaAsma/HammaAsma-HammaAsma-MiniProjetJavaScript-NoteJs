const EventEmitter=require("events");
const emitter=new EventEmitter();

emitter.on("utilisateurConnecté",(data)=>{
    console.log(`nouvelle connexion : ${data.nom} (${data.id})`);
});
emitter.emit("utilisateurConnecté",{id:1, nom:"Asma"});