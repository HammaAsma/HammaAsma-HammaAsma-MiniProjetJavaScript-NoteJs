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

