export default function validateResource(req, res, next) {
  const { name, type } = req.body;

  if (!name || typeof name !== "string") {
    return next({ status: 400, message: "Le champ 'name' est obligatoire et doit être une chaîne" });
  }

  if (!type || typeof type !== "string") {
    return next({ status: 400, message: "Le champ 'type' est obligatoire et doit être une chaîne" });
  }

  next();
}
