import {IConfig} from '../interfaces/config';
import {respond401} from '../utils/response';

export const authorizationRequest = (config: IConfig) => (req, res, next) => {
  if (req.headers[config.emailHeaderKey] &&
    req.headers[config.emailHeaderKey] === config.emailHeaderValue) {
    next();
    return;
  }
  respond401(res, 'Authorization failed.');
  return;
};
