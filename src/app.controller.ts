import { Controller, Param, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { AppService, RegisterUserInterface } from './app.service';

@Controller()
export class AppController {
  //khai báo các function trong appService
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  registerUser(@Body() Param): RegisterUserInterface{
    // gọi các function trong appService
    return this.appService.registerUser(Param);
  }

  @Get(':name')
  getHelloName(@Param() Param): string{
    console.log(Param.name)
    return 'Xin chào ' + Param.name
  }

  @Post()
  createRecord() {

  }

  @Put()
  updateRecord() {
    
  }

  @Delete()
  deleteRecord() {

  }
}
