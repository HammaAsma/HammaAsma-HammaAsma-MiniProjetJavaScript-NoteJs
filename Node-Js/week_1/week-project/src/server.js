import http from "node:http";
import { URL } from "node:url";
import routes from "./router.js";

function matchRoute(pathname, routePath) {
  const routeParts = routePath.split("/").filter(Boolean);
  const pathParts = pathname.split("/").filter(Boolean);

  if (routeParts.length !== pathParts.length) return null;

  const params = {};
  for (let i = 0; i < routeParts.length; i++) {
    if (routeParts[i].startsWith(":")) {
      const key = routeParts[i].slice(1);
      params[key] = pathParts[i];
    } else if (routeParts[i] !== pathParts[i]) {
      return null;
    }
  }

  return params; 
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let matchedRoute = null;
  let params = {};

  for (const r of routes) {
    if (r.method === req.method) {
      const result = matchRoute(url.pathname, r.path);
      if (result) {
        matchedRoute = r;
        params = result;
        break;
      }
    }
  }

  res.setHeader("Content-Type", "application/json");

  if (matchedRoute) {
    const data = matchedRoute.handler(params); 
    res.end(JSON.stringify(data, null, 2));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(3000, () => console.log("Server running at http://localhost:3000"));

