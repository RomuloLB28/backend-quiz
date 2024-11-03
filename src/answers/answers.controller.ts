import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AnswerService } from './answers.service';
import { Answer } from './answer.entity';
import { Question } from 'src/questions/question.entity';

@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get()
  async findAll(): Promise<Answer[]> {
    return this.answerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Answer> {
    return this.answerService.findOne(+id);
  }

  @Post()
  async create(@Body() answerData: Partial<Answer>, @Body('question') question: Question): Promise<Answer> {
    return this.answerService.create(answerData, question);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() answerData: Partial<Answer>): Promise<Answer> {
    return this.answerService.update(+id, answerData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.answerService.delete(+id);
  }
}
