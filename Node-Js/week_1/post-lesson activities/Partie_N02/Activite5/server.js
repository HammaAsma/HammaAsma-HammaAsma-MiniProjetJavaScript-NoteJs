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