import { Controller, Delete, Get } from '@nestjs/common';

@Controller('user')
export class UsersController {
  @Get()
  findAll(): string {
    return 'Danh sách người dùng';
  }

  @Get('/by-id')
  findDetail(): string {
    return 'Chi tiết người dùng';
  }

  // @Delete('/by-id')
  // deleteById(): string {
  //   return 'This action will delete a user by id';
  // }
}
