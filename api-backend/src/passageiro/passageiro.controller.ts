import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PassageiroService } from './passageiro.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePassageiroDto, UpdatePassageiroDto } from './dto/passageiro-dto';

@ApiTags('Passageiro')
@Controller('passageiro')
export class PassageiroController {
  constructor(private readonly passageiroService: PassageiroService) {}

  @ApiOperation({ summary: 'Cria um passageiro' })
  @ApiResponse({ status: 200, description: 'Passageiro criado' })
  @ApiBody({ type: CreatePassageiroDto, description: 'Dados para criar um passageiro' })
  @Post()
  create(@Body() createPassageiroDto: CreatePassageiroDto) {
    return this.passageiroService.create(createPassageiroDto);
  }

  @ApiOperation({ summary: 'Obtém todos os passageiros' })
  @Get()
  findAll() {
    return this.passageiroService.findAll();
  }

  @ApiOperation({ summary: 'Obtém um passageiro pelo id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passageiroService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualiza um passageiro' })
  @ApiResponse({ status: 200, description: 'Passageiro atualizado' })
  @ApiBody({ type: UpdatePassageiroDto, description: 'Dados para atualizar um passageiro' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassageiroDto: UpdatePassageiroDto) {
    return this.passageiroService.update(+id, updatePassageiroDto);
  }

  @ApiOperation({ summary: 'Deleta um passageiro' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passageiroService.remove(+id);
  }
}
