import { Test, TestingModule } from '@nestjs/testing';
import { NavioController } from './navio.controller';
import { NavioService } from './navio.service';

describe('NavioController', () => {
  let controller: NavioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NavioController],
      providers: [NavioService],
    }).compile();

    controller = module.get<NavioController>(NavioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
