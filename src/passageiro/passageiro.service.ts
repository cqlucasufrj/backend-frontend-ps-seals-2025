import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class PassageiroService {

  constructor(private prisma: PrismaService) {}

  async create(createPassageiroDto: Prisma.PassageiroCreateInput) {
    return this.prisma.passageiro.create({
      data: createPassageiroDto,
    });
  }

  async findAll() {
    return this.prisma.passageiro.findMany();
  }

  async findOne(id: number) {
    return this.prisma.passageiro.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, updatePassageiroDto: Prisma.PassageiroUpdateInput) {
    return this.prisma.passageiro.update({
      where: { id: id },
      data: updatePassageiroDto,
      });
  }

  async remove(id: number) {
    return this.prisma.passageiro.delete({
      where: { id: id },
      });
  }
}
