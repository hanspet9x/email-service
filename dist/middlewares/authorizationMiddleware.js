"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationRequest = void 0;
const response_1 = require("../utils/response");
const authorizationRequest = (config) => (req, res, next) => {
    if (req.headers[config.emailHeaderKey] &&
        req.headers[config.emailHeaderKey] === config.emailHeaderValue) {
        next();
        return;
    }
    (0, response_1.respond401)(res, 'Authorization failed.');
    return;
};
exports.authorizationRequest = authorizationRequest;
//# sourceMappingURL=authorizationMiddleware.js.map