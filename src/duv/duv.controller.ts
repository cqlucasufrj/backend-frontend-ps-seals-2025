import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DuvService } from './duv.service';
import { Prisma } from 'generated/prisma';

@Controller('duv')
export class DuvController {
  constructor(private readonly duvService: DuvService) {}

  @Post()
  create(@Body() createDuvDto: Prisma.DUVCreateInput) {
    return this.duvService.create(createDuvDto);
  }

  @Get()
  findAll() {
    return this.duvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.duvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDuvDto: Prisma.DUVUpdateInput) {
    return this.duvService.update(+id, updateDuvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.duvService.remove(+id);
  }
}
