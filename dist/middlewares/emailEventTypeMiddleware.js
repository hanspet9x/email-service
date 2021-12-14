"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailEventTypeMiddleware = void 0;
const emailEventTypeMiddleware = (type) => (req, res, next) => {
    req.body.emailType = type;
    next();
};
exports.emailEventTypeMiddleware = emailEventTypeMiddleware;
//# sourceMappingURL=emailEventTypeMiddleware.js.map