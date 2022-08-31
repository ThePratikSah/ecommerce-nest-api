import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CreateUserAddressDto, CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.getUserById(id);
  }

  @Post()
  addNewUser(@Body() data: CreateUserDto) {
    return this.userService.addNewUser(data);
  }

  @Get('/address')
  // as of now, I'm passing the userId in the params
  // but after implementing JWT, will return address of logged in users only
  getAllAddress(@Param('userId') userId: string) {
    return this.userService.getUserAddress(userId);
  }

  @Post('/address')
  // since the auth is not implemented
  // can get user id from the body and add address to that id
  // but will be fixed once auth will be implemented
  addNewAddress(
    @Body()
    data: CreateUserAddressDto,
  ) {
    return this.userService.addUserAddress(data);
  }
}
