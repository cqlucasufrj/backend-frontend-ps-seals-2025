import { Test, TestingModule } from '@nestjs/testing';
import { NavioService } from './navio.service';

describe('NavioService', () => {
  let service: NavioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavioService],
    }).compile();

    service = module.get<NavioService>(NavioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
