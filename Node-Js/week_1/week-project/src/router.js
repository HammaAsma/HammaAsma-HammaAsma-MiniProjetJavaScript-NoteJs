// Import from productsController les Methodes
import { 
  getProducts, 
  getProductById, 
  getProductBySku,
} from "./controllers/productsController.js";

// Import from ordersController les Methodes
import { 
  getOrders,
  getOrderById,
  getOrderByNumber
} from "./controllers/ordersController.js";

const routes = [
  // Produits
  { method: "GET", path: "/api/products", handler: getProducts },
  { method: "GET", path: "/api/products/:id", handler: getProductById },
  { method: "GET", path: "/api/products/sku/:sku", handler: getProductBySku },

  // Commandes
  { method: "GET", path: "/api/orders", handler: getOrders },
  { method: "GET", path: "/api/orders/:id", handler: getOrderById },
  { method: "GET", path: "/api/orders/number/:orderNumber", handler: getOrderByNumber }
];

export default routes;
