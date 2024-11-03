import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Answer } from 'src/answers/answer.entity';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  question_id: number;

  @Column('text')
  question_text: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];
}
