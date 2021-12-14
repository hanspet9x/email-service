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
  httpServerPort: Number(process.env.HTTP_SERVER_PORT),
  httpsServerPort: Number(process.env.HTTPS_SERVER_PORT),
  appCRTPath: process.env.APP_CRT_PATH,
  appKeyPath: process.env.APP_KEY_PATH,
} as IConfig;

export default config;
