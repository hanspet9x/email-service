import express from 'express';
import appRouter from './controllers';
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import config from './config';
import {respond400} from './utils/response';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const init = () => {
  app.use('/email', appRouter);
  app.use((err, req, res, next) => {
    if (res.headersSent) {
      next(err);
      return;
    }
    respond400(res, err.message);
  });

  app.use((req, res, next) => {
    respond400(res, 'A fatal error has occured.');
  });
  console.log('listening');
};

const ssl = {
  cert: fs.readFileSync(path.join(__dirname, '../.ttlx/ttl.crt')),
  ca: fs.readFileSync(path.join(__dirname, '../.ttlx/ttl.crt')),
  key: fs.readFileSync(path.join(__dirname, '../.ttlx/ttl.key')),
};
http.createServer(app).listen(config.httpServerPort, init);
https.createServer(ssl, app).listen(config.httpsServerPort, init);
