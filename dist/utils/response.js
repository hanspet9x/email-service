"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respond202 = exports.respond200 = exports.respond404 = exports.respond400 = exports.respond401 = void 0;
const respond401 = (res, errorMesssage) => {
    res.status(401).json({ error: true, message: errorMesssage });
};
exports.respond401 = respond401;
const respond400 = (res, errorMesssage) => {
    res.status(400).json({ error: true, message: errorMesssage });
};
exports.respond400 = respond400;
const respond404 = (res, errorMesssage) => {
    res.status(404).json({ error: true, message: errorMesssage });
};
exports.respond404 = respond404;
const respond200 = (res, data) => {
    res.status(200).json({ error: false, message: '', data });
};
exports.respond200 = respond200;
const respond202 = (res) => {
    res.status(202).json({ error: false, message: 'processing..', data: {} });
};
exports.respond202 = respond202;
//# sourceMappingURL=response.js.map