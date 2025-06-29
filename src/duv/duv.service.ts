import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DuvService {

  constructor(private prisma: PrismaService) {}
  
  async create(createDUVDto: Prisma.DUVCreateInput) {
    return this.prisma.dUV.create({
      data: createDUVDto,
    });
  }

  async findAll() {
    return this.prisma.dUV.findMany();
  }

  async findOne(id: number) {
    return this.prisma.dUV.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, updateDUVDto: Prisma.DUVUpdateInput) {
    return this.prisma.dUV.update({
      where: { id: id },
      data: updateDUVDto,
      });
  }

  async remove(id: number) {
    return this.prisma.dUV.delete({
      where: { id: id },
      });
  }
}
