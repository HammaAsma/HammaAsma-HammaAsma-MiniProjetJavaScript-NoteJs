class AppError extends Error{
    constructor (message,statusCode){
        super(message);
        this.statusCode=statusCode ;
        this.status='error';
        this.timestamp=new Date().toISOString();
        Error.captureStackTrace(this, this.constructor);
    }
}
export default AppError;