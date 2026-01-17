import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Lesson } from '../lesson/lesson.entity';
// README faylini yangilash
// API endpoint testlari qo'shildi

// unit testlar qo'shildi
@Entity()
export class Progress {
// integration testlar yaratildi
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Lesson, (lesson) => lesson.id)
  lesson: Lesson;

  @Column()
  completedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}