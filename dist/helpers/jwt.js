"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfo = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (...args) => {
    return new Promise((resolve, reject) => {
        const payload = { args };
        jsonwebtoken_1.default.sign(payload, process.env.JWT_KEY, {
            expiresIn: '6h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('The token was not created');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.createToken = createToken;
const getUserInfo = (token) => {
    return new Promise((resolve) => {
    });
};
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=jwt.js.map