export class CreateCouponDto {
  couponId: string;
  code: string;
  description: string;
  type?: 'FLAT' | 'PERCENT';
  amount: number;
  minCart: number;
  isActive?: boolean;
  isDeleted?: boolean;
}

export class CouponDto {
  couponId?: string;
  code?: string;
  description?: string;
  type?: 'FLAT' | 'PERCENT';
  amount?: number;
  minCart?: number;
  isActive?: boolean;
  isDeleted?: boolean;
}

export class ValidateCouponDto {
  cartValue: number;
  couponCode: string;
}
