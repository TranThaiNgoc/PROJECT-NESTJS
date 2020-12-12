import { Injectable, Param } from '@nestjs/common';

export interface RegisterUserInterface {
  name: string;
  age: number;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloName(@Param('id') name): string{
    console.log(name)
    return 'Xin chào'
  }
  registerUser(Param: RegisterUserInterface): RegisterUserInterface{ 
    if(Param.age >= 14) {
      this.addToHightSchool(Param)
      return Param
    }
    this.addTokingdergarten(Param)
    return Param
  }

  private addToHightSchool(Param) {
    console.log('Thêm user này vào trường '+Param.name)
  }

  private addTokingdergarten(Param) {
    console.log('thêm Tokingdergarten '+ Param.name)
  }
}
