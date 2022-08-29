import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { uuid } from 'src/utils/helper';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private databaseService: DatabaseService) {}

  getAllProducts() {
    return this.databaseService.product.findMany({
      where: {
        isDeleted: false,
      },
    });
  }

  getProductById(id: string) {
    return this.databaseService.product.findFirst({
      where: {
        AND: [
          {
            isDeleted: false,
          },
          {
            productId: id,
          },
        ],
      },
    });
  }

  getProductsByCategory(categoryId: string) {
    return this.databaseService.product.findMany({
      where: {
        categoryId,
      },
    });
  }

  addNewProduct(data: CreateProductDto) {
    const productId = uuid();
    return this.databaseService.product.create({
      data: {
        productId,
        ...data,
      },
    });
  }

  updateProduct(data: any, productId: string) {
    return this.databaseService.product.updateMany({
      data,
      where: {
        AND: [
          {
            productId,
          },
          {
            isDeleted: false,
          },
        ],
      },
    });
  }

  async deleteProduct(productId: string) {
    await this.databaseService.product.update({
      data: {
        isDeleted: true,
      },
      where: {
        productId,
      },
    });

    return { deleted: true };
  }
}
