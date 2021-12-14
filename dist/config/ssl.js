"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSSLParam = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getSSLParam = (config) => ({
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, config.appCRTPath)),
    ca: fs_1.default.readFileSync(path_1.default.join(__dirname, config.appCRTPath)),
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, config.appKeyPath)),
});
exports.getSSLParam = getSSLParam;
//# sourceMappingURL=ssl.js.map