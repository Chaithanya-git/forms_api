import { EntityRepository, Repository } from 'typeorm';
import { Mail } from '../entities/mail.entity';

@EntityRepository(Mail)
export class MailRepository extends Repository<Mail> {}
