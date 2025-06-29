import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NavioService } from './navio.service';
import { Prisma } from 'generated/prisma';

@Controller('navio')
export class NavioController {
  constructor(private readonly navioService: NavioService) {}

  @Post()
  create(@Body() createNavioDto: Prisma.NavioCreateInput) {
    return this.navioService.create(createNavioDto);
  }

  @Get()
  findAll() {
    return this.navioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.navioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNavioDto: Prisma.NavioUpdateInput) {
    return this.navioService.update(+id, updateNavioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.navioService.remove(+id);
  }
}
