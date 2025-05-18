import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @MessagePattern('createProducto')
  create(@Payload() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @MessagePattern('find_all_productos')
  findAll() {
    return this.productosService.findAll();
  }

  @MessagePattern('find_one_producto')
  findOne(@Payload() id: number) {
    console.log('MSPROD', id)
    return this.productosService.findOne(id);
  }

  @MessagePattern('updateProducto')
  update(@Payload() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(updateProductoDto.id, updateProductoDto);
  }

  @MessagePattern('removeProducto')
  remove(@Payload() id: number) {
    return this.productosService.remove(id);
  }
}
