import express from "express";
import {create, getRessourceId, getRessources, remove, update} from "../controllers/controllers.js";
const app=express.Router();


app.get('/',getRessources);
app.get('/:id', getRessourceId);
app.post('/',create);
app.put('/:id',update);
app.delete('/:id',remove);


export default app;