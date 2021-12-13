"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emailRequestMiddleware_1 = require("../middlewares/emailRequestMiddleware");
const attachMiddleware_1 = require("../middlewares/attachMiddleware");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
const services_1 = __importDefault(require("../services"));
const multer_1 = __importDefault(require("multer"));
const response_1 = require("../utils/response");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const file = (0, multer_1.default)();
const appRouter = express_1.default.Router();
appRouter.use('*', (0, authorizationMiddleware_1.authorizationRequest)(config_1.default), (req, res, next) => {
    next();
});
appRouter.use('/attach/*', file.single('file'), (0, attachMiddleware_1.attachmentMiddleware)(), (req, res, next) => {
    next();
});
appRouter.get('/test', (req, res) => {
    (0, response_1.respond200)(res, 'test');
});
appRouter.post('/text', (0, emailRequestMiddleware_1.validateEmailRequest)(), services_1.default.sendText);
appRouter.post('/html', (0, emailRequestMiddleware_1.validateEmailRequest)(), services_1.default.sendHTML);
appRouter.post('/attach/text', (0, emailRequestMiddleware_1.validateEmailRequest)(), services_1.default.sendTextAttach);
appRouter.post('/attach/html', (0, emailRequestMiddleware_1.validateEmailRequest)(), services_1.default.sendHTMLAttach);
exports.default = appRouter;
//# sourceMappingURL=index.js.map