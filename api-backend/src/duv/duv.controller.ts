import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DuvService } from './duv.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateDUVDto, UpdateDUVDto } from './dto/duv-dto';

@ApiTags('DUV')
@Controller('duv')
export class DuvController {
  constructor(private readonly duvService: DuvService) {}

  @ApiOperation({ summary: 'Cria uma DUV' })
  @ApiResponse({ status: 200, description: 'DUV criada' })
  @ApiBody({ type: CreateDUVDto, description: 'Dados para criar uma DUV' })
  @Post()
  create(@Body() createDuvDto: CreateDUVDto) {
    return this.duvService.create(createDuvDto);
  }

  @ApiOperation({ summary: 'Obtém todas as DUVs' })
  @Get()
  findAll() {
    return this.duvService.findAll();
  }

  @ApiOperation({ summary: 'Obtém uma DUV pelo ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.duvService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualiza uma DUV' })
  @ApiResponse({ status: 200, description: 'DUV atualizada' })
  @ApiBody({ type: UpdateDUVDto, description: 'Dados para atualizar uma DUV' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDuvDto: UpdateDUVDto) {
    return this.duvService.update(+id, updateDuvDto);
  }

  @ApiOperation({ summary: 'Deleta uma DUV' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.duvService.remove(+id);
  }
}
