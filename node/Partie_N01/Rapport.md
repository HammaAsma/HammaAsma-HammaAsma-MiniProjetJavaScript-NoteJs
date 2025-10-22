Activité 1 — “L’application qui casse à cause des variables globales” :

Discussion : 

1.Que se passe-t-il si plusieurs fichiers définissent les mêmes noms ?

	  Si plusieurs fichiers définissent les mêmes noms, cela peut créer des conflits
	  Notamment un écrasement des définitions 
  

2.Pourquoi est-ce un problème dans un projet réel ?

	Dans un projet réel on peut avoir  plusieurs points négatives:	
	  Difficulté de maintenance: Difficile à savoir quelle version d’une fonction est utilisée
	  Bugs difficiles à diagnostiquer : si deux fichiers portent le même nom, il est possible que le système utilise la mauvaise version
  
	
3.Comment le système de modules de Node résout-il ce problème ? 
  
  	Node.js utilise un système de modules chaque modules est indépendant



Activité 2 — “Mon premier module utilitaire” :

Discussion :

1.Quelle différence entre module.exports = fonction et module.exports = { … } :

	  Module.exports= fonction  :  Export d’une seul fonction
	  Module.exports={}  :  Export d’un objet
  
2.Dans quels cas préférez-vous l’un ou l’autre ? 

	Le choix dépend du nombre de fonctionnalités à exposer c’est le but est d’exporter une seule entité on utilise Module.exports= fonction , et si on veut avoir plusieurs méthode liées à un module on export l’objet avec la 2eme méthode


Activité 3 — “Explorateur de module” 

Discussion :

1.Que signifient __filename, __dirname, module, et exports ? 

	  __filename : Chemin complet du fichier
	  __dirname : Chemin du dossier contenant le fichier
	  Module : Présent le module courant
	  Exports : Alias de module.exports
  

2.Pourquoi exports = function() ne fonctionne pas comme prévu ?

		Parce que exports n’est qu’une copie de référence vers module.exports au début 	du fichier.
		
3.Quelle relation existe entre exports et module.exports ? 

	exports est un raccourci vers module.exports . Seul module.exports est réellement exporté par require()
	


Activité 4 — “Mini projet : Gestionnaire de contacts (CLI)” 

	

Discussion :


1.Quelle est la responsabilité de chaque module ? 

	  contactService: sert à géré les contact (l’ajout d'un contact et renvoie la liste des contacts)
	  Format: S’occuper uniquement du formatage des données.
	  App : C’est le fichier principal qui coordonne l’ensemble du programme
  
2.Pourquoi séparer le formatage, la logique et le point d’entrée ?

	  Quand chaque module se concentre sur une tâche précise, le programme devient  beaucoup plus facile de savoir où trouver ou modifier une fonctionnalité particulière.
	  Un module de formatage indépendant peut servir dans d’autres endroits du projet, sans être lié à la façon dont les données sont gérées ou stockées.
  
3.Comment cela faciliterait la maintenance à long terme ? 

	  Chaque bloc du code peut être examiné et testé à part, ce qui rend les corrections plus rapides et augmente la fiabilité globale.
	  Comme le travail est bien organisé par modules indépendants, plusieurs personnes peuvent travail sur le projet en même temps 
