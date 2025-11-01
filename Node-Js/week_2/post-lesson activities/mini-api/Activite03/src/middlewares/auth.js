function authentification(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('saisir un Token');
    }
    else if(req.headers.authorization === "1234"){
        next();
    }
    else{
        return res.status(401).json({"error":"Accès refusé","reason":"Token invalide"});
    }
}
export default {authentification};