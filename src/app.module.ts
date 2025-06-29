import { Module } from '@nestjs/common';
import { DuvModule } from './duv/duv.module';
import { PassageiroModule } from './passageiro/passageiro.module';
import { NavioModule } from './navio/navio.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DuvModule, PassageiroModule, NavioModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
