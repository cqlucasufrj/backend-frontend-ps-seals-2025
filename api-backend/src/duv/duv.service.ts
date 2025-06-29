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
        navio: {
          select: {
            id: true,
            nome: true,
            bandeira: true,
          },
        },
      }
    });
  }

  async findOne(id: number) {
    const duv = await this.prisma.dUV.findUnique({
      where: { id: id },
      include: {
        navio: true,
        listaDePassageiros: {
          select: {
            id: true,
            nome: true,
            foto: true,
            nacionalidade: true,
            SID: true,
            tipo: true,
          },
        },
      }
    });

    if (!duv) {
      throw new Error(`DUV with id ${id} not found`);
    }

    const listaPassageiros: typeof duv.listaDePassageiros = [];
    const listaTripulantes: typeof duv.listaDePassageiros = [];
    for (const passageiro of duv.listaDePassageiros) {
      if (passageiro.tipo === "tripulante") {
        listaTripulantes.push(passageiro);
      }
      else if (passageiro.tipo === "passageiro") {
        listaPassageiros.push(passageiro);
      }
    }

    const duvComListasFormatadas = {
      ...duv,
      listaPassageiros,
      listaTripulantes,
    }

    return duvComListasFormatadas;
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
