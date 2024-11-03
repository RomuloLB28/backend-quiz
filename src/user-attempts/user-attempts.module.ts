import { Module } from '@nestjs/common';
import { UserAttemptsService } from './user-attempts.service';
import { UserAttemptsController } from './user-attempts.controller';

@Module({
  providers: [UserAttemptsService],
  controllers: [UserAttemptsController]
})
export class UserAttemptsModule {}
