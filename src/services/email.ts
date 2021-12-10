import nodemailer from 'nodemailer';
import config from '../config';


export const transport = nodemailer.createTransport({
  host: config.emailHost,
  port: config.emailPort,
  secure: true,
  auth: {
    user: config.emailUsername,
    pass: config.emailPassword,
  },
});

