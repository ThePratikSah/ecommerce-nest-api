export class CreateProductDto {
  name: string;
  price: number;
  sellingPrice: number;
  image: string;
  description: string;
  categoryId: string;
  prescriptionRequired?: boolean;
}

export class ProductDto {
  productId?: string;
  name?: string;
  price?: number;
  sellingPrice?: number;
  image?: string;
  description?: string;
  categoryId?: string;
  prescriptionRequired?: boolean;
}
