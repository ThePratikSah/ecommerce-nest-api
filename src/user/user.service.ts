import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

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
}
