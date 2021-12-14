import {validateEmailRequest} from '../middlewares/emailRequestMiddleware';
import {attachmentMiddleware} from '../middlewares/attachMiddleware';
import {authorizationRequest} from '../middlewares/authorizationMiddleware';
import {emailEventTypeMiddleware} from
  '../middlewares/emailEventTypeMiddleware';
import express from 'express';
import config from '../config';
import mail from '../services';
import multer from 'multer';
import {respond200} from '../utils/response';

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

appRouter.post('/text-ex', validateEmailRequest(),
    emailEventTypeMiddleware('text'), mail.sendEvent);

appRouter.post('/html-ex', validateEmailRequest(),
    emailEventTypeMiddleware('html'), mail.sendEvent);

appRouter.post('/attach/text-ex', validateEmailRequest(),
    emailEventTypeMiddleware('text-attach'), mail.sendEvent);

appRouter.post('/attach/html-ex', validateEmailRequest(),
    emailEventTypeMiddleware('html-attach'), mail.sendEvent);

export default appRouter;
