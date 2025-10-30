const express=require("express");
const app=express();

/***Activite 1 */
app.get('/',(req,res)=>{
    res.send('Bienvenu sur mon Premier serveur Express');
});
/***Activite 2* */
app.get('/api/products',(req,res)=>{
    res.json([{id:1,name:'Laptop'},{id:2,name:'Phone'}]);
});
app.get('/api/products/:id',(req,res)=>{
    res.json({message:`Produit ${req.params.id}`});
});

/****Activite 3 */
app.use((req,res,next)=>{
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});
app.use((req,res,next)=>{
    req.startTime=Date.now();
    next();
})
app.get('/ping',(req,res)=>{
    const duration = Date.now() - req.startTime;
    res.json({message:  'pong',duration:`${duration}ms`});
});
/**Activite 4 */
app.get('/api/crash',(req,res,next)=>{
    const err=new Error('Erreur simulée');
   next(err);
});
app.use((err,req,res,next)=>{
    console.error('Erreur détectée :' ,err.message);
    res.status(500).json({error:err.message});
});

/**Activite 5 */
app.use(express.static('public'));

const fs= require('node:fs');

app.get('/api/products',(req,res)=>{
    const data=fs.readFileSync('./data/products.json');
    const products=JSON.parse(data);
    res.json(products);
});



app.listen(3000,()=>{
    console.log('Serveur en écoute sur http://localhost:3000');
})