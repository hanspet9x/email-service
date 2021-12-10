import {IEmail} from '../interfaces/IEmail';
import {respond400} from '../utils/response';

export const validateEmailRequest = () => (req, res, next) => {
  const body: IEmail = req.body;
  if (body.to && body.message && body.sender && body.subject) {
    next();
    return;
  }
  respond400(res, 'to, message, sender,or subject not found');
  return;
};
