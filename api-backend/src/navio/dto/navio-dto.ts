import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateNavioDto {
  @ApiProperty({
    description: 'O nome do navio (deve ser único)',
    example: 'Navio Imperial'
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'A bandeira do navio (ex: Brasil, Panamá, Libéria)',
    example: 'Brasil'
  })
  @IsString()
  @IsNotEmpty()
  bandeira: string;

  @ApiProperty({
    description: 'URL da imagem do navio',
    example: 'https://i.insider.com/63fe5742d5d80a0018278d37?width=1200',
    required: false
  })
  @IsOptional()
  @IsUrl()
  imagem?: string;
}

export class UpdateNavioDto {
  @ApiProperty({
    description: 'O nome do navio (deve ser único)',
    example: 'Navio Imperial',
    required: false
  })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({
    description: 'A bandeira do navio (ex: Brasil, Panamá, Libéria)',
    example: 'Brasil',
    required: false
  })
  @IsOptional()
  @IsString()
  bandeira?: string;

  @ApiProperty({
    description: 'URL da imagem do navio',
    example: 'https://i.insider.com/63fe5742d5d80a0018278d37?width=1200',
    required: false
  })
  @IsOptional()
  @IsUrl()
  imagem?: string;
}