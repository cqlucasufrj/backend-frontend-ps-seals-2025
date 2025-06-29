import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePassageiroDto, UpdatePassageiroDto } from './dto/passageiro-dto';

@Injectable()
export class PassageiroService {

  constructor(private prisma: PrismaService) {}

  async create(createPassageiroDto: CreatePassageiroDto) {

    if (createPassageiroDto.tipo === "tripulante") {
      if (!createPassageiroDto.SID) {
        throw new Error("SID é obrigatório para tripulantes");
      }
    }
    else {
      if (createPassageiroDto.SID) {
        throw new Error("SID não deve ser informado para passageiros");
      }
    }

    return this.prisma.passageiro.create({
      data: {
        nome: createPassageiroDto.nome,
        tipo: createPassageiroDto.tipo,
        SID: createPassageiroDto.SID,
        nacionalidade: createPassageiroDto.nacionalidade,
        foto: createPassageiroDto.foto
      },
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

  async update(id: number, updatePassageiroDto: UpdatePassageiroDto) {
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
