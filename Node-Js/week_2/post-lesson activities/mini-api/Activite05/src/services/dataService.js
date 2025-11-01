import path from 'path';
import {fileURLToPath} from 'url';
import { readFile } from 'node:fs/promises';

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const chemin= path.join(__dirname,'..','..','..','..','..','..','week_1','week-project','data','products.json');
/**
 *
 * @returns {Promise<products>}
 */
export async function listProducts() {
    const data=await readFile(chemin,'utf8');
    return JSON.parse(data);
}
/**
 * @param {{category?:string, minPrice?:number, maxPrice?:number, sort?:string}} query
 * @returns {Promise<products>}
 */
export async function filtersProducts(query) {
    let products=await listProducts();
    if(query.category){
        products=products.filter(p=> p.category === query.category);
    }
    if(query.minPrice){
        products=products.filter(p=>Number(p.Price) >= Number(query.minPrice));
    }
    if(query.maxPrice){
        products=products.filter(p=>Number(p.Price) <= Number(query.maxPrice));
    }
    if(query.sort){
        const order=query.sort.toLowerCase();
        if(order==='asc') products.sort((a,b)=>a.Price - b.Price);
        else if(order==='desc') products.sort((a,b)=>b.Price - a.Price);
    }
    console.log(`Requête: ${JSON.stringify(query)} , résultat: ${products.length}`)
    return products;
}