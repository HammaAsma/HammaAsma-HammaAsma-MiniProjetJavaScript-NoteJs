import express from "express";
import packag from "../../../package.json" with {type:"json"};
const router=express.Router();


/*route principal*/
router.get("/api", (req, res) => {
  res.send("Bienvenue !");
});

/**api/info
 * return name , version et date
 */
router.get("/api/info", (req, res) => {
  res.json({
      name: packag.name,
      version: packag.version,
      date: new Date().toDateString()
  });
});

export default router;