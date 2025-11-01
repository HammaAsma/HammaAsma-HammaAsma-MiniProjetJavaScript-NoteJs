import { readFile,writeFile } from 'node:fs/promises'
const chemin= 'data/data.json';

/**
 * @typedef {object} resources
 * @property {number} id
 * @property {string} name
 * @property {string} type
 */
/**
 * @return {Promise<resources[]>}
 */
export async function listRessources() {
    const data= await readFile(chemin, 'utf8')
    return JSON.parse(data);
}
/**
 * 
 * @param {number} id 
 * @return {Promise<resource>}
 */
export async function getRessourceByid(id) {
    const resources=await listRessources()
    return resources.find(r=>r.id===Number(id))
}
/**
 * 
 * @param {string} name
 * @param {string} type
 * @return {Promise<resource>}
 */
export async function createRessource({name,type}) {
    const resources=await listRessources();
    const id=resources.length?resources[resources.length-1].id+1 : 1;
    const resource={id,name,type}
    resources.push(resource)
    await writeFile(chemin,JSON.stringify(resources))
    return resource
}
/**
 * 
 * @param {number} id 
 * @param {{name?: string, type?: string}} element
 * @return {Promise<resource>}
 */
export async function updateRessource(id,element) {
    const resources=await listRessources()
    //console.log(resources)
    const index=resources.findIndex(resource=>resource.id===Number(id))
    if(index=== -1){
        return null
    }
    resources[index]={ ...resources[index], ...element}
    await writeFile(chemin,JSON.stringify( resources,null,2))
    return resources[index]
}
/**
 * 
 * @param {number} id
 * @return {Promise} 
 */
export async function removeRessource(id) {
    const resources=await listRessources();
    return await  writeFile(chemin,JSON.stringify(resources.filter(resource=>resource.id !== Number(id)),null,2),'utf8');
}