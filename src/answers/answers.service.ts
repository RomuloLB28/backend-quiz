import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './answer.entity';
import { Question } from 'src/questions/question.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
  ) {}

  async findAll(): Promise<Answer[]> {
    return this.answerRepository.find({ relations: ['question'] });
  }

  async findOne(id: number): Promise<Answer> {
    return this.answerRepository.findOne({
      where: { answer_id: id },
      relations: ['question'],
    });
  }

  async create(answerData: Partial<Answer>, question: Question): Promise<Answer> {
    const answer = this.answerRepository.create({ ...answerData, question });
    return this.answerRepository.save(answer);
  }

  async update(id: number, answerData: Partial<Answer>): Promise<Answer> {
    await this.answerRepository.update(id, answerData);
    return this.answerRepository.findOne({ where: { answer_id: id } });
  }

  async delete(id: number): Promise<void> {
    await this.answerRepository.delete(id);
  }
}
