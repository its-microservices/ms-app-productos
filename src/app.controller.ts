import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('productos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getProductos() {
    return 'Lista de productos';
  }
}
