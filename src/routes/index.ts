import { Router } from "express";

const routes = Router();

routes.get("/products", (request, response) => {
  return response.json({ message: "ok" });
});

export default routes;
