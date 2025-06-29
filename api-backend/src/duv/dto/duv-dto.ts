import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDUVDto {
  @ApiProperty({ 
    description: 'O ID do Navio da DUV',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  navioId: number;

  @ApiProperty({ 
    description: 'O número da DUV',
    example: 'DUV-12345',
  })
  @IsNotEmpty()
  @IsString()
  numeroDUV: string;

  @ApiProperty({ 
    description: 'A data da DUV',
    example: '2025-05-01T00:00:00Z',
   })
  @IsNotEmpty()
  @IsDate()
  dataDaViagem: Date;

  @ApiProperty({ 
    description: 'Os IDs dos Passageiros da DUV',
    example: [1, 2, 3],
   })
  @IsArray()
  @IsNotEmpty()
  @IsInt({ each: true })
  listaPassageiros: number[];
}

export class UpdateDUVDto {
  @ApiProperty({ 
    description: 'O ID do Navio da DUV',
    example: 1,
  })
  @IsInt()
  navioId?: number;

  @ApiProperty({ 
    description: 'O número da DUV',
    example: 'DUV-12345',
  })
  @IsString()
  numeroDUV?: string;

  @ApiProperty({ 
    description: 'A data da DUV',
    example: '2025-05-01T00:00:00Z',
   })
  @IsDate()
  dataDaViagem?: Date;

  @ApiProperty({ 
    description: 'Os IDs dos Passageiros da DUV',
    example: [1, 2, 3],
   })
  @IsArray()
  @IsInt({ each: true })
  listaPassageiros?: number[];
}
