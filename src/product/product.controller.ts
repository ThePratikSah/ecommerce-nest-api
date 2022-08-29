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
import { CreateProductDto, ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id', ParseUUIDPipe) id: string) {
    return this.productService.getProductById(id);
  }

  @Post()
  addNewProduct(@Body() data: CreateProductDto) {
    return this.productService.addNewProduct(data);
  }

  @Put(':productId')
  updateProduct(
    @Body() data: ProductDto,
    @Param('productId', ParseUUIDPipe) productId: string,
  ) {
    return this.productService.updateProduct(data, productId);
  }

  @Delete(':productId')
  deleteProduct(@Param('productId', ParseUUIDPipe) productId: string) {
    return this.productService.deleteProduct(productId);
  }

  // TODO: Will add more routes in future
  // 1. Get all deleted products
  // 2. Restore deleted products
  // 3. Permanently delete products
}
