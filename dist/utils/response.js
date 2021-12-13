"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respond200 = exports.respond400 = exports.respond401 = void 0;
const respond401 = (res, errorMesssage) => {
    res.status(401).json({ error: true, message: errorMesssage });
};
exports.respond401 = respond401;
const respond400 = (res, errorMesssage) => {
    res.status(400).json({ error: true, message: errorMesssage });
};
exports.respond400 = respond400;
const respond200 = (res, data) => {
    res.status(200).json({ error: false, message: '', data });
};
exports.respond200 = respond200;
//# sourceMappingURL=response.js.map