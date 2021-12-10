import {validateEmailRequest} from '../middlewares/emailRequestMiddleware';
import {attachmentMiddleware} from '../middlewares/attachMiddleware';
import express from 'express';
import config from '../config';
import mail from '../services';
import multer from 'multer';
import {respond200} from '../utils/response';
import {authorizationRequest} from '../middlewares/authorizationMiddleware';

const file = multer();
const appRouter = express.Router();

appRouter.use('*', authorizationRequest(config), (req, res, next) => {
  next();
});

appRouter.use('/attach/*', file.single('file'), attachmentMiddleware(),
    (req, res, next) => {
      next();
    });

appRouter.get('/test', (req, res) => {
  respond200(res, 'test');
});
appRouter.post('/text', validateEmailRequest(), mail.sendText);
appRouter.post('/html', validateEmailRequest(), mail.sendHTML);
appRouter.post('/attach/text', validateEmailRequest(), mail.sendTextAttach);
appRouter.post('/attach/html', validateEmailRequest(), mail.sendHTMLAttach);


export default appRouter;
