import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Accounts {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 50 })
  password: string;

  @Column({ unique: true, nullable: true })
  email: string;
}
