Activité 1 — “Diagnostic Machine”

Code: 

    const os =require("os");//accéder au module os
    console.log("Plateforme :",os.platform());//return la plateform de système dEX
    console.log("architecture :",os.arch());//return l'architecteur de CPU
    console.log("CPU :",os.cpus().length,"coeurs");// retourne le nombre de cœurs du processeur.
    console.log("Mémoire totale :",os.totalmem());// donne la quantité totale de mémoire vive (RAM) du système en octets.
    console.log("Mémoire libre :",os.freemem());//renvoie la quantité de mémoire libre disponible, également en octets.
    console.log("Uptime (en heures) :",(os.uptime()/3600).toFixed(2));//indique depuis combien de secondes le système est en marche. Ici, on le divise par 3600 pour l’avoir en heures et on arrondit à 2 décimales avec .toFixed(2).


Discussion :

1.Quelle est la différence entre os.platform() et os.arch() ?

    os.platform(): Décrit le type de système d’exploitation
    os.arch() : Décrit le type de processeur 

2.À quoi pourrait servir cette information dans une application réelle (ex : tableau de bord 
système) ?

    Ces informations peuvent être utiles dans une application réelle, par exemple dans un tableau de bord système pour afficher les caractéristiques du serveur. Elles permettent aussi d’adapter le comportement d’un programme selon la plate-forme, de surveiller les performances, ou de vérifier la compatibilité avant une installation.


Activité 2 — “Explorateur de fichiers”: 

code:

    const fs=require("fs");//importation de fs
    const path=require("path");//importation de path ==>pour construire ou analyser des chemins de fichiers

    fs.readdir(__dirname, (err,files)=>{//lit le contenu de ce dossier (__dirname représente le chemin absolu )
        if(err) return console.error("Erreur :",err.message);
        console.log("Contenu du dossier :",files);
    //le chemin complet de chaque file
        files.forEach(f=>console.log(path.join(__dirname, f)));

    //5
    const date = new Date().toLocaleString();
    const msg = `Date : ${date}\nNombre de fichiers : ${files.length}\n\n`;

    fs.appendFile("log.txt", msg, (err) => {
        if (err) console.error("Erreur :", err.message);
        else console.log("Fichier log.txt mis à jour !");
    });
    });

Activité 3 —“Moniteur d’événements” 
Code:

    const EventEmitter=require("events");
    const emitter=new EventEmitter();

    emitter.on("utilisateurConnecté",(data)=>{
        console.log(`nouvelle connexion : ${data.nom} (${data.id})`);
    });
    emitter.emit("utilisateurConnecté",{id:1, nom:"Asma"});

Discussion :
  
1.Que se passe-t-il si l’écouteur est enregistré après l’émission de l’événement ?

    il ne sera pas déclenché
2.Peut-on avoir plusieurs écouteurs pour un même événement ?

    Oui, on peut avoir plusieurs écouteurs pour un même événement.


Activité 4 — “Classe de Journalisation (Logger)” : 
Code

    //logger
    const EventEmitter=require("events");// n importiw module "events" bach nkhdmo b l'événements
    class Logger extends EventEmitter{// nkhlqo wahd class Logger li kat Eyrita  men EventEmitter
        log(message){// had méthode "log" kat affichi lina message w kat3yet 3la l événement
            console.log("LOG :",message);
            this.emit("messageLogged",{message,date:new Date()});//kat emit événement smito messageLogged  w kat sifet ma3ah message w date
        }
    }
    // kan exportiw  class Logger bach n9dro n importiwha f fichier app
    module.exports=Logger;
    //app
    const Logger=require("./logger");// n importiw class Logger li exportinaha f fichier logger
    const logger=new Logger();// n déclariw wahd instance men class Logger
    logger.on("messageLogged",(data)=>{// nsm3o l'événement "messageLogged"
        console.log("Evenement capturé :",data);
    });
    logger.log("Application démarrée !");// n3eyto l-méthode log bach nsift message


Discussion :

1.Quelle est la différence entre une instance directe d’EventEmitter et une classe qui l’étend ?   

    Instance directe: simple est rapide, juste pour émettre/écouter.
    Classe qui étend EventEmitter: on peut créer un objet avec ses propres méthodes qui émet des événements
2.Pourquoi encapsuler la logique dans une classe ?

    la classe permet de structurer le code et de le rendre réutilisable.

Activité 5 — “Serveur Node minimaliste” : 
Code:

    const http=require("http");// nimportiw module http bach ndir serveur
    const server=http.createServer((req,res)=>{// nkhlqo wahd serveur
        if(req.url==="/"){ // ila l'utilisateur mcha l'home page   "/"
            res.write("Bienvenue sur notre serveur Node.js !");//msg lighayl9a f  page
            res.end();
        }
        else if(req.url==="/api/etudiants"){ // ila mcha lhad url
            res.writeHead(200,{"content-Type": "application/json"});//ghayrj3 lih wahd json liste dial etudiant
            res.end(JSON.stringify(["Asma","Youness","Oussama"]));
        }
        else{// ila URL ma kaynach
            res.writeHead(404);
            res.end("Page non trouvée");
        }
    });
    server.listen(3000,()=>console.log("Serveur en écoute sur le port 3000..."));// serveur kay sma3 f port 3000 ay drna wahd event listen 3la had port




Activité 6 — “Combinaison finale” : 
Code:

    //logger
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
    //app
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


Discussion :

1.Que signifie “non-bloquant” dans le contexte du module fs ? 

    “Non bloquant” dans le module fs signifie que l’opération ne bloque pas l’exécution du programme. Node.js continue d’exécuter le reste du code pendant que la lecture ou l’écriture du fichier s’effectue en arrière-plan.
2.Comment les événements permettent-ils de découpler les modules?

    Un module peut simplement émettre un événement, et un autre module peut l’écouter sans que le premier ait besoin de le connaître. Ça rend le code plus facile à maintenir.
3.Pourquoi un serveur HTTP Node peut-il gérer des milliers de connexions avec un seul thread ? 

    Un serveur HTTP Node peut gérer des milliers de connexions avec un seul thread grâce à son fonctionnement asynchrone.

4.Quelle serait la prochaine étape (ex: Express, middlewares, JSON parsing) ? 
	
