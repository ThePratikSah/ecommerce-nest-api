import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CategoryService {
  constructor(private databaseService: DatabaseService) {}

  getAllCategories() {
    return this.databaseService.category.findMany();
  }
}
