"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("./controllers"));
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config"));
const response_1 = require("./utils/response");
const ssl_1 = require("./config/ssl");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const init = () => {
    app.use('/email', controllers_1.default);
    app.use((err, req, res, next) => {
        if (res.headersSent) {
            next(err);
            return;
        }
        (0, response_1.respond400)(res, err.message);
    });
    app.use((req, res, next) => {
        (0, response_1.respond404)(res, 'URL not found.');
    });
    console.log('listening');
};
http_1.default.createServer(app).listen(config_1.default.httpServerPort, init);
https_1.default.createServer((0, ssl_1.getSSLParam)(config_1.default), app)
    .listen(config_1.default.httpsServerPort, init);
//# sourceMappingURL=index.js.map