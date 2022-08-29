import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { uuid } from 'src/utils/helper';
import { CreateCouponDto, ValidateCouponDto } from './coupon.dto';

@Injectable()
export class CouponService {
  constructor(private databaseService: DatabaseService) {}

  getAllCoupons() {
    return this.databaseService.coupon.findMany({
      where: {
        isDeleted: false,
      },
    });
  }

  getCouponById(id: string) {
    return this.databaseService.coupon.findFirst({
      where: {
        AND: [
          {
            isDeleted: false,
          },
          {
            couponId: id,
          },
        ],
      },
    });
  }

  addNewCoupon(data: CreateCouponDto) {
    const couponId = uuid();
    return this.databaseService.coupon.create({
      data: {
        ...data,
        couponId,
      },
    });
  }

  async validateCoupon(data: ValidateCouponDto) {
    const { cartValue, couponCode: code } = data;
    const coupon = await this.databaseService.coupon.findFirst({
      where: {
        AND: [
          {
            code,
          },
          {
            isDeleted: false,
          },
        ],
      },
      select: {
        minCart: true,
        type: true,
        amount: true,
      },
    });

    if (!coupon) {
      return {
        error: true,
        message: 'No coupon found',
        amountToPay: cartValue,
      };
    }

    if (+cartValue < +coupon.minCart) {
      return {
        error: true,
        message: `Cart value should be greater than ${coupon.minCart}`,
        amountToPay: cartValue,
      };
    }

    if (coupon.type === 'FLAT') {
      const amountToPay = +cartValue - +coupon.amount;
      return {
        error: false,
        message: 'Discount applied',
        amountToPay,
      };
    } else {
      const amountToPay = +cartValue - (+coupon.amount / 100) * +cartValue;
      return {
        error: false,
        message: 'Discount applied',
        amountToPay,
      };
    }
  }

  updateCoupon(data: any, couponId: string) {
    return this.databaseService.coupon.updateMany({
      data,
      where: {
        AND: [
          {
            couponId,
          },
          {
            isDeleted: false,
          },
        ],
      },
    });
  }

  async deleteCoupon(couponId: string) {
    await this.databaseService.coupon.update({
      data: {
        isDeleted: true,
      },
      where: {
        couponId,
      },
    });

    return { deleted: true };
  }
}
