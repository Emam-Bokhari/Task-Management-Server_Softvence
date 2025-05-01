"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
const globalErrorHandler_middleware_1 = require("./middlewares/globalErrorHandler.middleware");
const notFound_middleware_1 = __importDefault(require("./middlewares/notFound.middleware"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: ['http://localhost:3000'], credentials: true }));
app.use((0, helmet_1.default)());
// application routes
app.use('/api/v1', routes_1.default);
// check health
app.get('/', (req, res) => {
    res.send('Server is running...');
});
// global error handler
app.use(globalErrorHandler_middleware_1.globalErrorHandler);
// not found error handler
app.use(notFound_middleware_1.default);
exports.default = app;
