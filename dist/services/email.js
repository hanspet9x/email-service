"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transport = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../config"));
exports.transport = nodemailer_1.default.createTransport({
    host: config_1.default.emailHost,
    port: config_1.default.emailPort,
    secure: true,
    auth: {
        user: config_1.default.emailUsername,
        pass: config_1.default.emailPassword,
    },
});
//# sourceMappingURL=email.js.map