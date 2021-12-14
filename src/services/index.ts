import {IEmail} from '../interfaces/IEmail';
import {EmailHTMLAttachRequestDTO, EmailHTMLRequestDTO,
  EmailTextAttachRequestDTO, EmailTextRequestDTO} from './dto/emailRequest';
import {transport} from './email';
import config from './../config/index';
import {respond200, respond202, respond400} from '../utils/response';
import EventEmitter from 'events';
import {TEmailType} from '../interfaces/emailType';
import {appEvents} from '../events';

/**
 * The email service
 */
class EmailService {
  /**
   * event Emitter.
   */
  eventEmmiter;
  /**
   * Register the event-based emailing. It does not wait for response.
   */
  constructor() {
    this.eventEmmiter = new EventEmitter();
    this.eventEmmiter.on(appEvents.emailRequest, this.eventFunc);
  }
  /**
   *
   * @param {TEmailType} emailType The email type.
   * @param {Express.Request} req The express request.
   */
  eventFunc = (emailType: TEmailType, req) => {
    switch (emailType) {
      case 'html':
        this.sendHTML(req, null);
        return;
      case 'text':
        this.sendText(req, null);
        return;
      case 'html-attach':
        this.sendHTMLAttach(req, null);
        return;
      case 'text-attach':
        this.sendTextAttach(req, null);
    }
  };
  /**
   * It sends a textual email.
   * @param {Express.Request} req
   * @param {Express.Response} res
   */
  sendEvent = (req, res) => {
    respond202(res);
    this.eventEmmiter.emit(appEvents.emailRequest, req.body.emailType, req);
  };

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
    if (res) {
      transport.sendMail(body, (err, info) => {
        if (err) {
          respond400(res, err.message);
          return;
        }
        respond200(res, info);
      });
    } else {
      this.send(body);
    }
  };
  /**
   * It sends a textual email.
   * @param {unknown} body
   */
  send = (body) => {
    transport.sendMail(body);
  };
}

const emailService = new EmailService();

export default {
  sendText: emailService.sendText,
  sendTextAttach: emailService.sendTextAttach,
  sendHTML: emailService.sendHTML,
  sendHTMLAttach: emailService.sendHTMLAttach,
  sendEvent: emailService.sendEvent,
};
