import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';
// package.json yangilandi
import { Course } from '../course/course.entity';
// API endpoint testlari qo'shildi
// API hujjatlarini qo'shish

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Course, (course) => course.id)
  course: Course;

  @Column()
  amount: number;

  @Column()
  status: 'pending' | 'completed' | 'failed';

  @Column()
  transactionId: string;

  @Column()
  paymentMethod: string;

  @Column()
  paymentLink: string;

  @CreateDateColumn()
  createdAt: Date;
}