function errorHandler(err,req,res,next){
    console.log('Erreur détectée :', err.message);
    res.status(500).json({error:err.message});
}
export default errorHandler;