import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswerModule } from './answers/answers.module';
import { UserAttemptsModule } from './user-attempts/user-attempts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'quiz',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    QuestionsModule,
    AnswerModule,
    UserAttemptsModule,
  ],
})
export class AppModule {}
