import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { uuid } from 'src/utils/helper';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private databaseService: DatabaseService) {}

  getAllUsers() {
    return this.databaseService.users.findMany();
  }

  getUserById(id: string) {
    return this.databaseService.users.findUnique({
      where: {
        userId: id,
      },
    });
  }

  addNewUser(data: CreateUserDto) {
    const userId = uuid();
    const { email, firstName, lastName, phone } = data;
    return this.databaseService.users.create({
      data: {
        userId,
        email,
        firstName,
        lastName,
        phone,
      },
    });
  }
}
