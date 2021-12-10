import {IEmail} from '../interfaces/IEmail';
import {EmailHTMLAttachRequestDTO, EmailHTMLRequestDTO,
  EmailTextAttachRequestDTO, EmailTextRequestDTO} from './dto/emailRequest';
import {transport} from './email';
import config from './../config/index';
import {respond200, respond400} from '../utils/response';

/**
 * The email service
 */
class EmailService {
  /**
   * It sends a textual email.
   * @param {Express.Request} req
   * @param {Express.Response} res
   */
  sendText = (req, res) => {
    const body = new EmailTextRequestDTO(req.body as IEmail, config);
    this.sendReponse(body, res);
  };
  /**
   * It sends a textual email with an attahcment.
   * @param {Express.Request} req
   * @param {Express.Response} res
   */
  sendTextAttach = (req, res) => {
    const body = new EmailTextAttachRequestDTO(req.body as IEmail, config);
    this.sendReponse(body, res);
  };
  /**
   * It sends an HTML email.
   * @param {Express.Request} req
   * @param {Express.Response} res
   */
  sendHTML = (req, res) => {
    const body = new EmailHTMLRequestDTO(req.body as IEmail, config);
    this.sendReponse(body, res);
  };
  /**
   * It sends an HTML email with attachment.
   * @param {Express.Request} req
   * @param {Express.Response} res
   */
  sendHTMLAttach = (req, res) => {
    const body = new EmailHTMLAttachRequestDTO(req.body as IEmail, config);
    this.sendReponse(body, res);
  };

  /**
   * It sends a textual email.
   * @param {unknown} body
   * @param {Express.Response} res
   */
  sendReponse = (body, res) => {
    transport.sendMail(body, (err, info) => {
      if (err) {
        respond400(res, err.message);
        return;
      }
      respond200(res, info);
    });
  };
}

const emailService = new EmailService;

export default {
  sendText: emailService.sendText,
  sendTextAttach: emailService.sendTextAttach,
  sendHTML: emailService.sendHTML,
  sendHTMLAttach: emailService.sendHTMLAttach,
};
