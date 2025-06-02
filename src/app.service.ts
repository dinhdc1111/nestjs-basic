import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // Model
    return 'Hello World! This is a NestJS application.';
  }
}
