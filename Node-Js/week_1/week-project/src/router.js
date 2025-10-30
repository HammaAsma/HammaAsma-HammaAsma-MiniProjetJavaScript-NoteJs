// Import from productsController les Methodes
import { 
  getProducts, 
} from "./controllers/productsController.js";

// Import from ordersController les Methodes
import { 
  getOrders,
} from "./controllers/ordersController.js";

const routes = [
  // Products
  { method: "GET", path: API_PRODUCTS, handler: getProducts },

  // orders
  { method: "GET", path: API_ORDERS, handler: getOrders },

  //health
  { method: "GET", path: API_HEALTH, handler: "" },
];

export default routes;
