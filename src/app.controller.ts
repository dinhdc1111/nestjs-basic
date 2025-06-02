import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  getHello() {
    const messageTest = this.appService.getHello();
    return { message: messageTest }; // Pass data to the EJS template
    // return this.appService.getHello();
  }
}
