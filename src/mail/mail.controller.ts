import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { SendMailDto } from './dto/send-mail.dto';

@Controller('mail')
@ApiTags('Mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The mail has been successfully created.',
  })
  addMail(@Body() createMailDto: CreateMailDto) {
    return this.mailService.addMail(createMailDto);
  }

  @Post('send')
  @ApiResponse({
    status: 200,
    description: 'The mail has been successfully sent.',
  })
  sendMail(@Body() sendMailDto: SendMailDto) {
    return this.mailService.sendMail(sendMailDto);
  }
}
