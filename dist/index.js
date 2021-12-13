"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("./controllers"));
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const init = () => {
    app.use('/email', controllers_1.default);
};
const ssl = {
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, '../.ttlx/ttl.crt')),
    ca: fs_1.default.readFileSync(path_1.default.join(__dirname, '../.ttlx/ttl.crt')),
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, '../.ttlx/ttl.key')),
};
http_1.default.createServer(app).listen(3499, init);
https_1.default.createServer(ssl, app).listen(3500, init);
//# sourceMappingURL=index.js.map