import {TEmailType} from '../interfaces/emailType';

export const emailEventTypeMiddleware = (type: TEmailType) =>
  (req, res, next) => {
    req.body.emailType = type;
    next();
  };
