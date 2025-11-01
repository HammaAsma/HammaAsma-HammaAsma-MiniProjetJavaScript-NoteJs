function errorHandler(err,req,res,next){
    console.log('Erreur détectée :', err.message);
    res.status(err.statusCode||500).json({
            "status":err.status || 'error',
            "message":err.message,
            "code":err.statusCode || 500,
            "timestamp":err.timestamp || new Date().toISOString(),
    });
}
export default errorHandler;