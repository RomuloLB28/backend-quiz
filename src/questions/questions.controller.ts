// src/questions/questions.controller.ts
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async findAll(): Promise<Question[]> {
    return this.questionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Question> {
    const question = await this.questionsService.findOne(id);
    if (!question) {
      throw new NotFoundException(`Pergunta com ID ${id} não encontrada`);
    }
    return question;
  }
}
