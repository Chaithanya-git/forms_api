import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { MailRepository } from './repo/mail.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MailRepository])],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
