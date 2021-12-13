import express from 'express';
import appRouter from './controllers';
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const init = () => {
  app.use('/email', appRouter);
};

const ssl = {
  cert: fs.readFileSync(path.join(__dirname, '../.ttlx/ttl.crt')),
  ca: fs.readFileSync(path.join(__dirname, '../.ttlx/ttl.crt')),
  key: fs.readFileSync(path.join(__dirname, '../.ttlx/ttl.key')),
};
http.createServer(app).listen(3499, init);
https.createServer(ssl, app).listen(3500, init);
