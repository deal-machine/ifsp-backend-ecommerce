import { Router } from "express";
import { getRepository, getCustomRepository } from "typeorm";

import Product from "../models/Product";
import ProductsRepository from "../repositories/ProductsRepository";
import CreateProductService from "../services/CreateProductService";

const productsRouter = Router();

productsRouter.get("/", async (request, response) => {
  const productsRepository = getRepository(Product);
  const products = await productsRepository.find({ relations: ["category"] });

  products.map((product) => delete product.category_id);

  return response.json(products);
});

productsRouter.get("/:title", async (request, response) => {
  try {
    const productsRepository = getCustomRepository(ProductsRepository);
    const { title } = request.params;
    const product = await productsRepository.findProductByTitle(title);

    return response.json(product);
  } catch (err) {
    return response.status(401).json({ Error: err.message });
  }
});

productsRouter.post("/", async (request, response) => {
  try {
    const {
      title,
      description,
      price,
      category,
      quantity,
      image,
    } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      title,
      description,
      price,
      quantity,
      category,
      image,
    });

    return response.json(product);
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});
export default productsRouter;
