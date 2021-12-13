"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachmentMiddleware = void 0;
const response_1 = require("../utils/response");
const attachmentMiddleware = () => (req, res, next) => {
    if (req.file) {
        req.body.attach = {
            filename: req.file.originalname,
            buffer: req.file.buffer,
        };
        next();
        return;
    }
    (0, response_1.respond400)(res, 'File not found.');
    return;
};
exports.attachmentMiddleware = attachmentMiddleware;
//# sourceMappingURL=attachMiddleware.js.map