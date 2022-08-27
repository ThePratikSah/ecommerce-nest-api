import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [DatabaseModule],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
