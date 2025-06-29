import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDUVDto, UpdateDUVDto } from './dto/duv-dto';

@Injectable()
export class DuvService {

  constructor(private prisma: PrismaService) {}
  
  async create(createDUVDto: CreateDUVDto) {
    return this.prisma.dUV.create({
      data: 
      {
        numeroDUV: createDUVDto.numeroDUV,
        dataDaViagem: createDUVDto.dataDaViagem,
        navioId: createDUVDto.navioId,
        listaDePassageiros: {
          connect: createDUVDto.listaPassageiros.map(passageiro => ({ id: passageiro })),
        },
      },
    });
  }

  async findAll() {
    return this.prisma.dUV.findMany({
      include: {
        navio: true,
        listaDePassageiros: {
          select: {
            id: true,
            nome: true,
            foto: true,
          },
        },
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.dUV.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, updateDUVDto: UpdateDUVDto) {
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
