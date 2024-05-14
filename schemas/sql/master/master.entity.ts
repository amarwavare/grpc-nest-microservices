import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Master {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ nullable: true, unique: false })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, unique: false })
  updatedAt: Date;

  @Column()
  name: string;
}
