import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fromName: string;

  @Column()
  fromEmail: string;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  smtpHost: string;

  @Column()
  smtpPort: number;

  @Column()
  messagePerDay: number;

  @Column()
  minimumTimeGap: string;

  @Column()
  imapHost: string;

  @Column()
  imapPort: number;
}
