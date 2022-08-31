export class CreateUserDto {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export class UserDto {
  userId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export class CreateUserAddressDto {
  userId: string;
  addressOne: string;
  addressTwo?: string;
  city: string;
  state: string;
  pin: string;
  country: string;
  phone: string;
}
