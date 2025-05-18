import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductosService {

  constructor(private _prisma: PrismaService) { }

  async create(createProductoDto: CreateProductoDto) {
    return this._prisma.product.create({ data: createProductoDto });
  }

  findAll() {
    return this._prisma.product.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this._prisma.product.findUnique({
      where: { id, deletedAt: null }
    });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    return this._prisma.product.update({
      where: { id },
      data: updateProductoDto
    });
  }

  async remove(id: number) {
    return this._prisma.product.update({
      where: { id },
      data: { active: false, deletedAt: new Date() },
    });
  }
}
