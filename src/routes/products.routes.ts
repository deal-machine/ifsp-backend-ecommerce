import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/", (request, response) => {
  return response.json({ route: "products" });
});

export default productsRouter;
