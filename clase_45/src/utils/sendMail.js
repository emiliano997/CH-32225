import nodemailer from 'nodemailer';
import config from '../config/config.js';
import { welcomeTemplate } from '../templates/welcome.js';

class SendMail {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.MAIL_HOST,
      port: config.MAIL_PORT,
      secure: false,
      auth: {
        user: config.MAIL_USER,
        pass: config.MAIL_PASS
      }
    })
  }

  async sendMailSimple(to, subject, user) {
    let descripcion;
    let title;

    switch(subject) {
      case 'Welcome':
        title = 'Welcome to my app';
        descripcion = `Welcome ${user.username} to my app`;
        break;

      default:
        break;

    }

    const info = await this.transporter.sendMail({
      from: config.MAIL_FROM,
      to,
      subject,
      html: welcomeTemplate(title, descripcion, user)
    })
  }
}

export default new SendMail();