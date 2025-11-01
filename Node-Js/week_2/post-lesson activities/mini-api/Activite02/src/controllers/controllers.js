import { createRessource, getRessourceByid, listRessources, removeRessource, updateRessource } from "../services/services.js";

//fct qui va liste les rousources 'GET'
export async function getRessources(req,res) {
    try{
        let {page=1,limit=10} = req.query
        page=parseInt(page)
        limit=parseInt(limit)

        if(isNaN(page) || page < 1){
            page=1;
        }
        if(isNaN(limit) || limit < 1){
            limit=10;
        }
        const ressources= await listRessources()
        const start=(page-1)*limit
        const end=start+limit
        res.json({
            page,
            limit,
            total:ressources.length,
            totalPages:Math.ceil(ressources.length/limit),
            data:ressources.slice(start,end)
        })
    }
    catch(e){
        next(e)
    }
}
//get by id
export async function getRessourceId(req,res) {
    const {id}=req.params
    const resource=await getRessourceByid(id)
    return res.json(resource)
}
//fct pour ajouté un resource au data 'POST'
export async function create(req,res) {
    const element=req.body
    const resource=await createRessource(element)
    res.status(201).json(resource)
}
//fct pour Màj une ressource avec son id 'PUT'
export async function update(req,res) {
    const id=parseInt(req.params.id)
    const element =req.body
    return res.json(await updateRessource(id,element))
}
//fct pour supprimer une ressource avec sont id 'DELETE'
export async function remove(req,res) {
    const id=parseInt(req.params.id)
    await removeRessource(id)
    res.status(204).end()
}