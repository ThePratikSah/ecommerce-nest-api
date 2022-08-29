import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';

@Module({
  controllers: [CouponController],
  providers: [CouponService],
  imports: [DatabaseModule],
})
export class CouponModule {}
