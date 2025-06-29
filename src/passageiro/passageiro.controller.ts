import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PassageiroService } from './passageiro.service';
import { Prisma } from 'generated/prisma';

@Controller('passageiro')
export class PassageiroController {
  constructor(private readonly passageiroService: PassageiroService) {}

  @Post()
  create(@Body() createPassageiroDto: Prisma.PassageiroCreateInput) {
    return this.passageiroService.create(createPassageiroDto);
  }

  @Get()
  findAll() {
    return this.passageiroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passageiroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassageiroDto: Prisma.PassageiroUpdateInput) {
    return this.passageiroService.update(+id, updatePassageiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passageiroService.remove(+id);
  }
}
