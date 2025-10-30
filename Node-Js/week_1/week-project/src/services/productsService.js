import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pagination } from "../utils/parseQuery";
// --- Récupérer __dirname en ES Modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Charger JSON des produits ---
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../data/products.json"), "utf-8")
);


//List des Produits par filter 
function FilterProducts(query){
   

      // Filtrage
    let filtered= products.data;
    //catégory
    if (query.category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === query.category.toLowerCase());
    }
    //prix min
    if (query.minPrice) {
      filtered = filtered.filter(p => p.minPrice >= Number(query.minPrice));
    }
    //prix max
    if (query.maxPrice) {
      filtered = filtered.filter(p => p.maxPrice <= Number(query.maxPrice));
    }

    //un Nouveau tableau qui va contenant que les éléments de la page demande ainsi le Nb
    const tableProducts = filtered.slice(start, end);

    return  tableProducts;
}

//cette fct renoyer les infos d'un produit a partir de sont id
function getProductById(key) {
    //on va rehcerche ds products le produit qui à le mm id 
  const product = products.data.find(p => p.id === Number(key.id));
  //si trouve on le retourne 
  return product || { error: "Ce Produit n'existe pas" };
}
//infos de produit par sku
function getProductBySku(value) {
//on va rehcerche ds products le produit qui à le mm sku 
  const product = products.data.find(p => p.sku === value.sku);

  return product || { error: "Ce Produit n'existe pas" };
}

export function getProducts(query){

}