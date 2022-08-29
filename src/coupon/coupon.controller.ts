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
import { CouponDto, CreateCouponDto, ValidateCouponDto } from './coupon.dto';
import { CouponService } from './coupon.service';

@Controller('coupon')
export class CouponController {
  constructor(private CouponService: CouponService) {}

  @Get()
  getAllCoupons() {
    return this.CouponService.getAllCoupons();
  }

  @Get(':id')
  getCouponById(@Param('id', ParseUUIDPipe) id: string) {
    return this.CouponService.getCouponById(id);
  }

  @Post()
  addNewCoupon(@Body() data: CreateCouponDto) {
    return this.CouponService.addNewCoupon(data);
  }

  @Post('validate-coupon')
  validateCoupon(@Body() data: ValidateCouponDto) {
    return this.CouponService.validateCoupon(data);
  }

  @Put(':CouponId')
  updateCoupon(
    @Body() data: CouponDto,
    @Param('CouponId', ParseUUIDPipe) CouponId: string,
  ) {
    return this.CouponService.updateCoupon(data, CouponId);
  }

  @Delete(':CouponId')
  deleteCoupon(@Param('CouponId', ParseUUIDPipe) CouponId: string) {
    return this.CouponService.deleteCoupon(CouponId);
  }

  // TODO: Will add more routes in future
  // 1. Get all deleted Coupons
  // 2. Restore deleted Coupons
  // 3. Permanently delete Coupons
}
