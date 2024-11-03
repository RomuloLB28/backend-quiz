// src/questions/questions.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
  ) {}

  async findAll(): Promise<Question[]> {
    return this.questionsRepository.find({ relations: ['answers'] });
  }

  async findOne(id: number): Promise<Question> {
    return this.questionsRepository.findOne({
      where: { question_id: id },
      relations: ['answers'],
    });
  }
}
