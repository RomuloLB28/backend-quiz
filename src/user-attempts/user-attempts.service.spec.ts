import { Test, TestingModule } from '@nestjs/testing';
import { UserAttemptsService } from './user-attempts.service';

describe('UserAttemptsService', () => {
  let service: UserAttemptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAttemptsService],
    }).compile();

    service = module.get<UserAttemptsService>(UserAttemptsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
