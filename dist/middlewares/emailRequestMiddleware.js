"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmailRequest = void 0;
const response_1 = require("../utils/response");
const validateEmailRequest = () => (req, res, next) => {
    const body = req.body;
    if (body.to && body.message && body.sender && body.subject) {
        next();
        return;
    }
    response_1.respond400(res, 'to, message, sender,or subject not found');
    return;
};
exports.validateEmailRequest = validateEmailRequest;
//# sourceMappingURL=emailRequestMiddleware.js.map