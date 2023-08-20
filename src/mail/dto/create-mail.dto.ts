import { IsNotEmpty, IsEmail, IsInt, IsString } from 'class-validator';

export class CreateMailDto {
  @IsNotEmpty()
  @IsEmail()
  fromEmail: string;

  @IsNotEmpty()
  @IsString()
  fromName: string;

  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  smtpHost: string;

  @IsNotEmpty()
  @IsInt()
  smtpPort: number;

  @IsNotEmpty()
  @IsInt()
  messagePerDay: number;

  @IsNotEmpty()
  @IsString()
  minimumTimeGap: string;

  @IsNotEmpty()
  @IsString()
  imapHost: string;

  @IsNotEmpty()
  @IsInt()
  imapPort: number;
}
