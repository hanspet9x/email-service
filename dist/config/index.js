"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    emailHost: process.env.EMAIL_HOST,
    emailPort: Number(process.env.EMAIL_PORT),
    emailUsername: process.env.EMAIL_USERNAME,
    emailPassword: process.env.EMAIL_PASSWORD,
    emailHeaderKey: process.env.EMAIL_HEADER_KEY,
    emailHeaderValue: process.env.EMAIL_HEADER_VALUE,
    httpServerPort: Number(process.env.HTTP_SERVER_PORT),
    httpsServerPort: Number(process.env.HTTPS_SERVER_PORT),
};
exports.default = config;
//# sourceMappingURL=index.js.map