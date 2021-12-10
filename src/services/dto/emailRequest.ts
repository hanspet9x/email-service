
import Mail from 'nodemailer/lib/mailer';
import {IConfig} from '../../interfaces/config';
import {IEmail} from '../../interfaces/IEmail';

/**
 * An email service
 */
class EmailRequestDTO {
  /**
   *
   * @param {IEmail} data
   * @param {IConfig} config
   */
  constructor(data: IEmail, config: IConfig) {
    this.to = data.to;
    this.from = `${data.sender} <${config.emailUsername}>`;
    this.subject = data.subject;
  }
  readonly to:string;
  readonly from:string;
  readonly subject:string;
}

/**
 * An email service
 */
class EmailRequestAttachDTO extends EmailRequestDTO {
  /**
   *
   * @param {IEmail} data
   * @param {IConfig} config
   */
  constructor(data: IEmail, config: IConfig) {
    super(data, config);
    this.attachments = [
        {
          filename: data.attach.filename,
          content: data.attach.buffer,
        } as Mail.Attachment,
    ];
  }
  readonly attachments:Array<Mail.Attachment>;
}

/**
 * An email service for text body
 */
export class EmailTextRequestDTO extends EmailRequestDTO {
  /**
   *
   * @param {IEmail} data
   * @param {IConfig} config
   */
  constructor(data: IEmail, config: IConfig) {
    super(data, config);
    this.text = data.message;
  }
  readonly text:string;
}

/**
 * An email service for text and attachment.
 */
export class EmailTextAttachRequestDTO extends EmailRequestAttachDTO {
  /**
   *
   * @param {IEmail} data
   * @param {IConfig} config
   */
  constructor(data: IEmail, config: IConfig) {
    super(data, config);
    this.text = data.message;
  }
  readonly text:string;
}

/**
 * An email service
 */
export class EmailHTMLRequestDTO extends EmailRequestDTO {
/**
   *
   * @param {IEmail} data
   * @param {IConfig} config
   */
  constructor(data: IEmail, config: IConfig) {
    super(data, config);
    this.html = data.message;
  }
  readonly html:string;
}

/**
 * An email service
 */
export class EmailHTMLAttachRequestDTO extends EmailRequestAttachDTO {
/**
   *
   * @param {IEmail} data
   * @param {IConfig} config
   */
  constructor(data: IEmail, config: IConfig) {
    super(data, config);
    this.html = data.message;
  }
  readonly html:string;
}


