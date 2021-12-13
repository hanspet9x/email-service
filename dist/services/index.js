"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emailRequest_1 = require("./dto/emailRequest");
const email_1 = require("./email");
const index_1 = __importDefault(require("./../config/index"));
const response_1 = require("../utils/response");
/**
 * The email service
 */
class EmailService {
    constructor() {
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
            email_1.transport.sendMail(body, (err, info) => {
                if (err) {
                    response_1.respond400(res, err.message);
                    return;
                }
                response_1.respond200(res, info);
            });
        };
    }
}
const emailService = new EmailService;
exports.default = {
    sendText: emailService.sendText,
    sendTextAttach: emailService.sendTextAttach,
    sendHTML: emailService.sendHTML,
    sendHTMLAttach: emailService.sendHTMLAttach,
};
//# sourceMappingURL=index.js.map