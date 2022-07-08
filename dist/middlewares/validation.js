"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerErrorResult = exports.verifyToken = void 0;
const express_validator_1 = require("express-validator");
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (token) => {
    const result = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
    if (!result) {
        throw Error('Token de acceso inválido');
    }
    return true;
};
exports.verifyToken = verifyToken;
const handlerErrorResult = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors,
        });
    }
    next();
};
exports.handlerErrorResult = handlerErrorResult;
//# sourceMappingURL=validation.js.map