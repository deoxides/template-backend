"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Server Config
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
//Database
const db_1 = require("./db");
//Routes
const routes_1 = require("./routes");
class AplicationServer {
    constructor() {
        this.port = process.env.PORT || "8080";
        this.app = (0, express_1.default)();
        this.http = http_1.default.createServer(this.app);
        this.connectDB();
        this.middlewares();
        this.routes();
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.sequelize.authenticate();
                console.log('database connected');
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    listen() {
        this.http.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)({
            origin: ['http://localhost:4200', 'http://localhost:8080', 'https://jsj-stitch.herokuapp.com'],
            credentials: true
        }));
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, express_session_1.default)({
            secret: 'test',
            resave: false,
            saveUninitialized: false
        }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(__dirname + '/public'));
        this.app.use('/uploads', express_1.default.static('uploads'));
    }
    routes() {
        this.app.use('/api/admin', routes_1.admin.default);
        this.app.use('/api/auth', routes_1.auth.default);
        this.app.use('/api/marketplace', routes_1.marketplace.default);
        //Angular Routes
        this.app.get('*', (req, res) => {
            res.sendFile(path_1.default.resolve(__dirname, 'public/index.html'));
        });
    }
}
exports.default = AplicationServer;
//# sourceMappingURL=server.js.map