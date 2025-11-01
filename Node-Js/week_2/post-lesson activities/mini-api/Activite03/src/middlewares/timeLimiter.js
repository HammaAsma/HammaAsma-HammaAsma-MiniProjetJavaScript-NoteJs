function timerLimiter(req,res,next){
  const heure=new Date().getHours();
   if(heure <= 22 && heure >= 6){
        next();
    }
    else{
        return res.status(401).json({"error":"Accès refusé","reason":"horaire interdit"});
    }
}
export default {timerLimiter};