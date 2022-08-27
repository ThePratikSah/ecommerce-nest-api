import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductService {
  constructor(private databaseService: DatabaseService) {}

  getAllProducts() {
    return this.databaseService.product.findMany();
  }
}
