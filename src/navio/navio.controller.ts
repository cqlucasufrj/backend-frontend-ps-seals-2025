import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NavioService } from './navio.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateNavioDto, UpdateNavioDto } from './dto/navio-dto';

@ApiTags('Navio')
@Controller('navio')
export class NavioController {
  constructor(private readonly navioService: NavioService) {}

  @ApiOperation({ summary: 'Cria um navio' })
  @ApiResponse({ status: 200, description: 'Navio criado' })
  @ApiBody({ type: CreateNavioDto, description: 'Dados para criar um navio' })
  @Post()
  create(@Body() createNavioDto: CreateNavioDto) {
    return this.navioService.create(createNavioDto);
  }

  @ApiOperation({ summary: 'Obtém todos os navios' })
  @Get()
  findAll() {
    return this.navioService.findAll();
  }

  @ApiOperation({ summary: 'Obtém um navio pelo id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.navioService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualiza um navio' })
  @ApiResponse({ status: 200, description: 'Navio atualizado' })
  @ApiBody({ type: UpdateNavioDto, description: 'Dados para atualizar um navio' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNavioDto: UpdateNavioDto) {
    return this.navioService.update(+id, updateNavioDto);
  }

  @ApiOperation({ summary: 'Deleta um navio pelo id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.navioService.remove(+id);
  }
}
