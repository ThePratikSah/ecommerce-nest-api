import { Controller, Get, Post } from '@nestjs/common';
import { Users } from '@prisma/client';
import { v4 as uuid } from 'uuid';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllUsers(): Promise<Users[]> {
    return this.appService.getAllUsers();
  }

  @Post()
  addNewUser() {
    const user: Users = {
      userId: uuid(),
      email: 'pratiksah@hotmail.com',
      firstName: 'Pratik',
      lastName: 'Sah',
      phone: '8709105800',
      emailVerified: false,
      phoneVerified: false,
      password: '',
      isDeleted: false,
    };

    return this.appService.addNewUser(user);
  }
}
