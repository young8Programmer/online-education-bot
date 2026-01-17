import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Course } from '../course/course.entity';
// unit testlar qo'shildi

// CORS xatosi tuzatildi
@Entity()
// component testlari yaratildi
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

// changelog yangilandi
  @ManyToOne(() => Course, (course) => course.lessons, { onDelete: 'CASCADE' })
  course: Course;

  @Column('jsonb')
  title: { uz: string; ru: string; en: string };

  @Column()
  contentType: string;

  @Column()
  contentUrl: string;

  @Column()
  order: number;

  @CreateDateColumn()
  createdAt: Date;
}