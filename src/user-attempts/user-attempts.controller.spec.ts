import { Test, TestingModule } from '@nestjs/testing';
import { UserAttemptsController } from './user-attempts.controller';

describe('UserAttemptsController', () => {
  let controller: UserAttemptsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAttemptsController],
    }).compile();

    controller = module.get<UserAttemptsController>(UserAttemptsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
