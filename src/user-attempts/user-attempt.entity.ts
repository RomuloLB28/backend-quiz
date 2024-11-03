import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity('user_attempts')
export class UserAttempt {
  @PrimaryGeneratedColumn()
  attempt_id: number;

  @ManyToOne(() => User, (user) => user.user_id, { onDelete: 'CASCADE' })
  user: User;

  @Column({ default: 0 })
  score: number;

  @CreateDateColumn()
  attempted_at: Date;
}
