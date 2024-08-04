import { Injectable } from '@nestjs/common';

type User = {
    name: string;
    age: number;
}
@Injectable()
export class UsersService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  list(): User[] {
    return [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
    ];
  }

}
