import {IConfig} from '../interfaces/config';
import fs from 'fs';
import path from 'path';

export const getSSLParam = (config: IConfig) => ({
  cert: fs.readFileSync(path.join(__dirname, config.appCRTPath)),
  ca: fs.readFileSync(path.join(__dirname, config.appCRTPath)),
  key: fs.readFileSync(path.join(__dirname, config.appKeyPath)),
});
