Discussion :

        Activite01:

            Qu’apportes-tu en termes de clarté et de maintenabilité ?

                rends le code plus clair en séparant les parties. C’est plus facile à comprendre, à modifier et à corriger.

            Quels fichiers changeraient le plus souvent si l’API évolue ?

                Les contrôleurs et les services, car c’est là que la logique de l’application change le plus
        
        Activite02:

            Qu’est-ce qu’un endpoint REST bien conçu ?

                C’est une route simple, claire et cohérente, avec les bons verbes HTTP et des noms faciles à comprendre.

            Pourquoi l’idempotence est-elle importante dans une API ?

                Parce qu’elle évite les erreurs si une même requête est envoyée plusieurs fois. Le résultat reste toujours le même.

        Activite03:

            Quelle est la différence entre un middleware global et local ?

                le Global agit sur toutes les routes
                le local seulement sur certaines

            Pourquoi la réutilisabilité est-elle une force des middlewares ?

                les middlewares sont indépendants on peut les utiliser dans plusieurs routes sans avoir les recréer

        Activite04:

            Pourquoi séparer la logique d’erreur du code métier ?

                Pour que le code soit plus propre  et que les erreurs soient  gérées au même endroit

            Qu’apporte la cohérence des messages d’erreur côté client ?

                Le client comprend mieux les erreurs et peut les gérer plus facilement 
        
        Activite05:

            Comment éviter le blocage du thread lors de la lecture de fichier ?

                en utilisent les fct async pour la lecteur  de fichier

            Quelle est la différence entre readFileSync et fs.promises.readFile ?
                 
                readFileSync bloque le programme pendant la lecture de fichier
                fs.promises.readFile lit le fichier en arrière-plan sans bloque le reste de code

