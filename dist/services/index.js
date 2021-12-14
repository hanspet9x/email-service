"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emailRequest_1 = require("./dto/emailRequest");
const email_1 = require("./email");
const index_1 = __importDefault(require("./../config/index"));
const response_1 = require("../utils/response");
const events_1 = __importDefault(require("events"));
const events_2 = require("../events");
/**
 * The email service
 */
class EmailService {
    /**
     * Register the event-based emailing. It does not wait for response.
     */
    constructor() {
        /**
         *
         * @param {TEmailType} emailType The email type.
         * @param {Express.Request} req The express request.
         */
        this.eventFunc = (emailType, req) => {
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
        this.sendEvent = (req, res) => {
            (0, response_1.respond202)(res);
            this.eventEmmiter.emit(events_2.appEvents.emailRequest, req.body.emailType, req);
        };
        /**
         * It sends a textual email.
         * @param {Express.Request} req
         * @param {Express.Response} res
         */
        this.sendText = (req, res) => {
            const body = new emailRequest_1.EmailTextRequestDTO(req.body, index_1.default);
            this.sendReponse(body, res);
        };
        /**
         * It sends a textual email with an attahcment.
         * @param {Express.Request} req
         * @param {Express.Response} res
         */
        this.sendTextAttach = (req, res) => {
            const body = new emailRequest_1.EmailTextAttachRequestDTO(req.body, index_1.default);
            this.sendReponse(body, res);
        };
        /**
         * It sends an HTML email.
         * @param {Express.Request} req
         * @param {Express.Response} res
         */
        this.sendHTML = (req, res) => {
            const body = new emailRequest_1.EmailHTMLRequestDTO(req.body, index_1.default);
            this.sendReponse(body, res);
        };
        /**
         * It sends an HTML email with attachment.
         * @param {Express.Request} req
         * @param {Express.Response} res
         */
        this.sendHTMLAttach = (req, res) => {
            const body = new emailRequest_1.EmailHTMLAttachRequestDTO(req.body, index_1.default);
            this.sendReponse(body, res);
        };
        /**
         * It sends a textual email.
         * @param {unknown} body
         * @param {Express.Response} res
         */
        this.sendReponse = (body, res) => {
            if (res) {
                email_1.transport.sendMail(body, (err, info) => {
                    if (err) {
                        (0, response_1.respond400)(res, err.message);
                        return;
                    }
                    (0, response_1.respond200)(res, info);
                });
            }
            else {
                this.send(body);
            }
        };
        /**
         * It sends a textual email.
         * @param {unknown} body
         */
        this.send = (body) => {
            email_1.transport.sendMail(body);
        };
        this.eventEmmiter = new events_1.default();
        this.eventEmmiter.on(events_2.appEvents.emailRequest, this.eventFunc);
    }
}
const emailService = new EmailService();
exports.default = {
    sendText: emailService.sendText,
    sendTextAttach: emailService.sendTextAttach,
    sendHTML: emailService.sendHTML,
    sendHTMLAttach: emailService.sendHTMLAttach,
    sendEvent: emailService.sendEvent,
};
//# sourceMappingURL=index.js.map