import { Test, TestingModule } from '@nestjs/testing';
import { DuvController } from './duv.controller';
import { DuvService } from './duv.service';

describe('DuvController', () => {
  let controller: DuvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuvController],
      providers: [DuvService],
    }).compile();

    controller = module.get<DuvController>(DuvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
