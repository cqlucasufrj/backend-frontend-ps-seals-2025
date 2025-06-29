import { Module } from '@nestjs/common';
import { NavioService } from './navio.service';
import { NavioController } from './navio.controller';

@Module({
  controllers: [NavioController],
  providers: [NavioService],
})
export class NavioModule {}
