import { EntityRepository, Repository, getRepository } from "typeorm";
import Product from "../models/Product";

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  public async findProductByTitle(title: string): Promise<Product | null> {
    const findProduct = await this.findOne({ where: { title } });

    return findProduct || null;
  }
}

export default ProductsRepository;
