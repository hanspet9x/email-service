import {respond400} from '../utils/response';

export const attachmentMiddleware = () => (req, res, next) => {
  if (req.file) {
    req.body.attach = {
      filename: req.file.originalname,
      buffer: req.file.buffer,
    };
    next();
    return;
  }
  respond400(res, 'File not found.');
  return;
};
