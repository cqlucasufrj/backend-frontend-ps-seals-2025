import { Module } from '@nestjs/common';
import { DuvService } from './duv.service';
import { DuvController } from './duv.controller';

@Module({
  controllers: [DuvController],
  providers: [DuvService],
})
export class DuvModule {}
