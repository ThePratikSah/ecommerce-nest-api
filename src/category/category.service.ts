import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { uuid } from 'src/utils/helper';
import { CategoryDto, CreateCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private databaseService: DatabaseService) {}

  getAllCategories() {
    return this.databaseService.category.findMany({
      where: {
        isDeleted: false,
      },
    });
  }

  getCategoryById(id: string) {
    return this.databaseService.category.findFirst({
      where: {
        AND: [
          {
            isDeleted: false,
          },
          {
            categoryId: id,
          },
        ],
      },
    });
  }

  addNewCategory(data: CreateCategoryDto) {
    const categoryId = uuid();
    return this.databaseService.category.create({
      data: {
        categoryId,
        ...data,
      },
    });
  }

  updateCategory(data: CategoryDto, categoryId: string) {
    return this.databaseService.category.updateMany({
      data,
      where: {
        AND: [
          {
            categoryId,
          },
          {
            isDeleted: false,
          },
        ],
      },
    });
  }

  async deleteCategory(categoryId: string) {
    await this.databaseService.category.update({
      data: {
        isDeleted: true,
      },
      where: {
        categoryId,
      },
    });

    return { deleted: true };
  }
}
