import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private databaseService: DatabaseService) {}

  getAllUser() {
    return this.databaseService.users.findMany();
  }
}
