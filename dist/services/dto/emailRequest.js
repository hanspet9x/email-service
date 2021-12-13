"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailHTMLAttachRequestDTO = exports.EmailHTMLRequestDTO = exports.EmailTextAttachRequestDTO = exports.EmailTextRequestDTO = void 0;
/**
 * An email service
 */
class EmailRequestDTO {
    /**
     *
     * @param {IEmail} data
     * @param {IConfig} config
     */
    constructor(data, config) {
        this.to = data.to;
        this.from = `${data.sender} <${config.emailUsername}>`;
        this.subject = data.subject;
    }
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
    constructor(data, config) {
        super(data, config);
        this.attachments = [
            {
                filename: data.attach.filename,
                content: data.attach.buffer,
            },
        ];
    }
}
/**
 * An email service for text body
 */
class EmailTextRequestDTO extends EmailRequestDTO {
    /**
     *
     * @param {IEmail} data
     * @param {IConfig} config
     */
    constructor(data, config) {
        super(data, config);
        this.text = data.message;
    }
}
exports.EmailTextRequestDTO = EmailTextRequestDTO;
/**
 * An email service for text and attachment.
 */
class EmailTextAttachRequestDTO extends EmailRequestAttachDTO {
    /**
     *
     * @param {IEmail} data
     * @param {IConfig} config
     */
    constructor(data, config) {
        super(data, config);
        this.text = data.message;
    }
}
exports.EmailTextAttachRequestDTO = EmailTextAttachRequestDTO;
/**
 * An email service
 */
class EmailHTMLRequestDTO extends EmailRequestDTO {
    /**
       *
       * @param {IEmail} data
       * @param {IConfig} config
       */
    constructor(data, config) {
        super(data, config);
        this.html = data.message;
    }
}
exports.EmailHTMLRequestDTO = EmailHTMLRequestDTO;
/**
 * An email service
 */
class EmailHTMLAttachRequestDTO extends EmailRequestAttachDTO {
    /**
       *
       * @param {IEmail} data
       * @param {IConfig} config
       */
    constructor(data, config) {
        super(data, config);
        this.html = data.message;
    }
}
exports.EmailHTMLAttachRequestDTO = EmailHTMLAttachRequestDTO;
//# sourceMappingURL=emailRequest.js.map