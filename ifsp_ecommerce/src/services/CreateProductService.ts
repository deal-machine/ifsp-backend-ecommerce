import Product from "../models/Product";
import { getRepository } from "typeorm";
import Category from "../models/Category";

interface Request {
  title: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
}

class CreateProductService {
  public async execute({
    title,
    description,
    price,
    category,
    quantity,
    image,
  }: Request): Promise<Product> {
    const productRepository = getRepository(Product);
    const categoryRepository = getRepository(Category);

    const categoryExists = await categoryRepository.findOne({
      where: { title: category },
    });
    if (!categoryExists) {
      const newCategory = categoryRepository.create({
        title: category,
      });
      await categoryRepository.save(newCategory);

      const product = productRepository.create({
        title,
        description,
        price,
        category_id: newCategory.id,
        image,
        quantity,
      });

      await productRepository.save(product);
      return product;
    }

    const product = productRepository.create({
      title,
      description,
      price,
      category_id: categoryExists.id,
      quantity,
      image,
    });
    await productRepository.save(product);
    return product;
  }
}
export default CreateProductService;
