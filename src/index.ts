import express from 'express';
import appRouter from './controllers';
import https from 'https';
import http from 'http';
import config from './config';
import {respond400, respond404} from './utils/response';
import {getSSLParam} from './config/ssl';

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
    respond404(res, 'URL not found.');
  });
  console.log('listening');
};

http.createServer(app).listen(config.httpServerPort, init);

https.createServer(getSSLParam(config), app)
    .listen(config.httpsServerPort, init);
