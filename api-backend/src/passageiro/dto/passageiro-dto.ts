import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

enum TipoPassageiro {
  passageiro = 'passageiro',
  tripulante = 'tripulante',
}

export class CreatePassageiroDto {
  @ApiProperty({
    description: 'Nome completo do passageiro',
    example: 'Lucas Cordeiro',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Tipo do passageiro: passageiro ou tripulante',
    example: 'tripulante',
    enum: TipoPassageiro,
  })
  @IsEnum(TipoPassageiro)
  @IsNotEmpty()
  tipo: TipoPassageiro;

  @ApiProperty({
    description: 'SID do passageiro (deve ser único)',
    example: 'SID123456',
  })
  @IsString()
  @IsOptional()
  SID?: string;

  @ApiProperty({
    description: 'Nacionalidade do passageiro',
    example: 'Brasil',
  })
  @IsString()
  @IsNotEmpty()
  nacionalidade: string;

  @ApiProperty({
    description: 'URL da foto do passageiro',
    example: 'https://randomuser.me/api/portraits/men/0.jpg',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  foto?: string;
}

export class UpdatePassageiroDto {
  @ApiProperty({
    description: 'Nome completo do passageiro',
    example: 'Lucas Cordeiro',
    required: false,
  })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({
    description: 'Tipo do passageiro: passageiro ou tripulante',
    example: 'tripulante',
    enum: TipoPassageiro,
    required: false,
  })
  @IsOptional()
  @IsEnum(TipoPassageiro)
  tipo?: TipoPassageiro;

  @ApiProperty({
    description: 'SID do passageiro (deve ser único)',
    example: 'SID123456',
    required: false,
  })
  @IsOptional()
  @IsString()
  SID?: string;

  @ApiProperty({
    description: 'Nacionalidade do passageiro',
    example: 'Brasil',
    required: false,
  })
  @IsOptional()
  @IsString()
  nacionalidade?: string;

  @ApiProperty({
    description: 'URL da foto do passageiro',
    example: 'https://randomuser.me/api/portraits/men/0.jpg',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  foto?: string;
}
