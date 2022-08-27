import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private databaseService: DatabaseService) {}
  getAllUsers(): Promise<Users[]> {
    return this.databaseService.users.findMany();
  }

  addNewUser(user: Users) {
    const { userId, email, phone, password, lastName, firstName } = user;
    return this.databaseService.users.create({
      data: {
        userId,
        email,
        phone,
        lastName,
        firstName,
        password,
      },
    });
  }
}
