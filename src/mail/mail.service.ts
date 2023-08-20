import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailRepository } from './repo/mail.repository';
import { CreateMailDto } from './dto/create-mail.dto';
import { SendMailDto } from './dto/send-mail.dto';
import * as nodemailer from 'nodemailer';
import { Mail } from './entities/mail.entity';

@Injectable()
export class MailService {
  constructor(
    @InjectRepository(MailRepository)
    private mailRepository: MailRepository,
  ) {}

  async addMail(createMailDto: CreateMailDto): Promise<Mail> {
    const mail = new Mail();
    Object.assign(mail, createMailDto);
    const savedMail = await this.mailRepository.save(mail);
    return savedMail;
  }

  async sendMail(sendMailDto: SendMailDto): Promise<string> {
    const mailConfig = {
      smtpHost: 'smtp.zoho.com.au',
      smtpPort: 465,
      userName: 'vnamburi@smartleadscale.org',
      password: 'sg#2cxEi3Jo@ZX2f!4',
      fromName: 'Vaibhav Namvburi',
      fromEmail: 'vnamburi@smartleadscale.org',
    };

    const transporter = nodemailer.createTransport({
      host: mailConfig.smtpHost,
      port: mailConfig.smtpPort,
      secure: true,
      auth: {
        user: mailConfig.userName,
        pass: mailConfig.password,
      },
    });

    const mailOptions = {
      from: `"${mailConfig.fromName}" <${mailConfig.fromEmail}>`,
      to: sendMailDto.to,
      subject: sendMailDto.subject,
      text: sendMailDto.message,
    };

    try {
      await transporter.sendMail(mailOptions);
      return 'Email sent successfully.';
    } catch (error) {
      throw new Error('Could not send email.');
    }
  }
}
