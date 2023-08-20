import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { SendMailDto } from './dto/send-mail.dto';

@Controller('mail')
@ApiTags('Mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  addMail(@Body() createMailDto: CreateMailDto) {
    return this.mailService.addMail(createMailDto);
  }

  @Post('send')
  sendMail(@Body() sendMailDto: SendMailDto) {
    return this.mailService.sendMail(sendMailDto);
  }
}
