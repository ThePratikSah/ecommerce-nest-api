import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { CouponModule } from './coupon/coupon.module';

@Module({
  imports: [UserModule, DatabaseModule, ProductModule, CategoryModule, CouponModule],
})
export class AppModule {}
