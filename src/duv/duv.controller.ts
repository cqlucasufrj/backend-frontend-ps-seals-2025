import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DuvService } from './duv.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateDUVDto, UpdateDUVDto } from './dto/duv-dto';

@ApiTags('DUV')
@Controller('duv')
export class DuvController {
  constructor(private readonly duvService: DuvService) {}

  @ApiOperation({ summary: 'Fazer login, gerar JWT' })
  @ApiResponse({ status: 200, description: 'Login realizado' })
  @ApiBody({ type: CreateDUVDto, description: 'Dados para login' })
  @Post()
  create(@Body() createDuvDto: CreateDUVDto) {
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
  update(@Param('id') id: string, @Body() updateDuvDto: UpdateDUVDto) {
    return this.duvService.update(+id, updateDuvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.duvService.remove(+id);
  }
}
