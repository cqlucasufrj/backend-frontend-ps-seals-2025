import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNavioDto, UpdateNavioDto } from './dto/navio-dto';

@Injectable()
export class NavioService {

  constructor(private prisma: PrismaService) {}

  async create(createNavioDto: CreateNavioDto) {
    return this.prisma.navio.create({
      data: createNavioDto,
    });
  }

  async findAll() {
    return this.prisma.navio.findMany();
  }

  async findOne(id: number) {
    return this.prisma.navio.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, updateNavioDto: UpdateNavioDto) {
    return this.prisma.navio.update({
      where: { id: id },
      data: updateNavioDto,
      });
  }

  async remove(id: number) {
    return this.prisma.navio.delete({
      where: { id: id },
      });
  }
}
