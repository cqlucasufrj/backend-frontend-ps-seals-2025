import { Test, TestingModule } from '@nestjs/testing';
import { DuvService } from './duv.service';

describe('DuvService', () => {
  let service: DuvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuvService],
    }).compile();

    service = module.get<DuvService>(DuvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
