import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// --- Récupérer __dirname en ES Modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Charger JSON des produits ---
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../data/products.json"), "utf-8")
);

//List des Produits  
export function getProducts(query){
    //page c'est depuis quelle page on va récupere ==> valeur par defaut depuis la 1ere page
    const page = Number(query.page) || 1;
    //limit nb des éléments à récupere ==> valeur par defaut est 10 éléments 
    const limit = Number(query.limit) || 10;
    //si on va recupere depuis plusieurs pages
    const start = (page - 1) * limit;//==>le début le récuperation
    const end = start + limit;//==>la fin
    //un Nouveau tableau qui va contenant que les éléments de la page demande ainsi le Nb
    const tableProducts = products.data.slice(start, end);
    return  tableProducts;
}
//cette fct renoyer les infos d'un produit a partir de sont id
export function getProductById(key) {
    //on va rehcerche ds products le produit qui à le mm id 
  const product = products.data.find(p => p.id === Number(key.id));
  //si trouve on le retourne 
  return product || { error: "Ce Produit n'existe pas" };
}
//infos de produit par sku
export function getProductBySku(value) {
//on va rehcerche ds products le produit qui à le mm sku 
  const product = products.data.find(p => p.sku === value.sku);
  return product || { error: "Ce Produit n'existe pas" };
}
