import dotenv from 'dotenv';
import {IConfig} from '../interfaces/config';

dotenv.config();

const config = {
  emailHost: process.env.EMAIL_HOST,
  emailPort: Number(process.env.EMAIL_PORT),
  emailUsername: process.env.EMAIL_USERNAME,
  emailPassword: process.env.EMAIL_PASSWORD,
  emailHeaderKey: process.env.EMAIL_HEADER_KEY,
  emailHeaderValue: process.env.EMAIL_HEADER_VALUE,
} as IConfig;

export default config;
