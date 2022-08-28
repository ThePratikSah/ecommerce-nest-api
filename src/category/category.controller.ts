import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryDto, CreateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  getCategoryById(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoryService.getCategoryById(id);
  }

  @Post()
  addNewCategory(@Body() category: CreateCategoryDto) {
    return this.categoryService.addNewCategory(category);
  }

  @Put(':categoryId')
  updateCategory(
    @Body() data: CategoryDto,
    @Param('categoryId', ParseUUIDPipe) categoryId: string,
  ) {
    return this.categoryService.updateCategory(data, categoryId);
  }

  @Delete(':categoryId')
  deleteCategory(@Param('categoryId', ParseUUIDPipe) categoryId: string) {
    return this.categoryService.deleteCategory(categoryId);
  }

  // TODO: Will add more routes in future
  // 1. Get all deleted categories
  // 2. Restore deleted categories
  // 3. Permanently delete categories
}
