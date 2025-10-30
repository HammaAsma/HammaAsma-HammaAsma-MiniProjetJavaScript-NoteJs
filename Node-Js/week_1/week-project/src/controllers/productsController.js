import routes from "../router";
import { getProducts } from "../services/productsService";

//List des Produits  
export function listProducts(query){
  const { q, category, minPrice, maxPrice,inStock, oage, limit  } = query;

}


