const os =require("os");//accéder au module os
console.log("Plateforme :",os.platform());//return la plateform de système dEX
console.log("architecture :",os.arch());//return l'architecteur de CPU
console.log("CPU :",os.cpus().length,"coeurs");// retourne le nombre de cœurs du processeur.
console.log("Mémoire totale :",os.totalmem());// donne la quantité totale de mémoire vive (RAM) du système en octets.
console.log("Mémoire libre :",os.freemem());//renvoie la quantité de mémoire libre disponible, également en octets.
console.log("Uptime (en heures) :",(os.uptime()/3600).toFixed(2));//indique depuis combien de secondes le système est en marche. Ici, on le divise par 3600 pour l’avoir en heures et on arrondit à 2 décimales avec .toFixed(2).
