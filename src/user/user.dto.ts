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
