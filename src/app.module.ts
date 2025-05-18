import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './modules/productos/productos.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [ProductosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
