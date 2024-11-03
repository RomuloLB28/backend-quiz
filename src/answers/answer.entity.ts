import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from 'src/questions/question.entity';

@Entity('answers')
export class Answer {
  @PrimaryGeneratedColumn()
  answer_id: number;

  @Column('text')
  answer_text: string;

  @Column({ default: false })
  is_correct: boolean;

  @ManyToOne(() => Question, (question) => question.answers, { onDelete: 'CASCADE' })
  question: Question;
}
