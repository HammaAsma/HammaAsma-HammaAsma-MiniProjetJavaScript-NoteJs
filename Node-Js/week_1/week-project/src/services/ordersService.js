import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// --- Récupérer __dirname en ES Modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Charger JSON des produits ---
const orders = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../data/orders.json"), "utf-8")
);

//list des commandes
export function filterOrders(query) {

  const { from, to, status, page , limit  } = query;

  // on va filtre selon les paramettre passe dans la requete Get
  const filtered = orders.data.filter(o => {
    //on prend les commandes à partir de date debut qui est passe par la requete
    const fromOk = from ? new Date(o.date) >= new Date(from) : true;
    //on prend les commandes avant ou egal au date passe par la requete
    const toOk = to ? new Date(o.date) <= new Date(to) : true;
    //on filtre avec status passe par la requete 
    const statusOk = status ? o.status === status : true;

    return fromOk && toOk && statusOk;
  });

 //un tableau qui contient les commandes selon le filtres
  const tableOrders = filtered.slice(0, Number(limit));

  return tableOrders;
}

export function getOrderById(key){
    //on va rehcerche ds orders la commande qui à le mm id 
  const order = orders.data.find(p => p.id === Number(key.id));
  //si trouve on le retourne 
  return order || { error: "Cette commande n'existe pas" };

}
export function getOrderByNumber(key){
    //on va rehcerche ds orders  la commande qui à le mm orderNumber 
  const product = orders.data.find(p => p.orderNumber === key.orderNumber);
  return product || { error: "Cette commande n'existe pas" };
}

export function getOrders(rep,que){

}
