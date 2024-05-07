import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getUsers(): string[] {
    return ['user1', 'user2', 'user3'];
  }

  getHello(): string {
    return 'Hello World!';
  }
}
