"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const multer_1 = __importStar(require("multer"));
const admin_controller_1 = require("../controllers/admin.controller");
const validation_1 = require("../middlewares/validation");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: (0, multer_1.diskStorage)({
        destination: 'uploads/designs',
        filename(req, file, callback) {
            callback(null, file.originalname);
        },
    }),
});
router.get('/Poleron', [
    (0, express_validator_1.query)('id', 'campo obligatorio'),
    validation_1.handlerErrorResult
], admin_controller_1.getPoleron);
router.post('/Poleron', [
    upload.single('img'),
    (0, express_validator_1.body)(['color', 'talla', 'disenio', 'precio'], 'campo obligatorio').notEmpty(),
    (0, express_validator_1.body)('talla').toUpperCase().isIn(['XS', 'S', 'M', 'L', 'XL']),
    (0, express_validator_1.body)('precio').isNumeric(),
    validation_1.handlerErrorResult
], admin_controller_1.newPoleron);
router.delete('/Poleron/:id', [
    (0, express_validator_1.param)('id').notEmpty().bail().isNumeric(),
    validation_1.handlerErrorResult
], admin_controller_1.deletePoleron);
router.put('/Poleron', [
    upload.any(),
    validation_1.handlerErrorResult
], admin_controller_1.updatePoleron);
router.put('/Stock', [
    (0, express_validator_1.body)(['id', 'cantidad']).notEmpty().isNumeric(),
    validation_1.handlerErrorResult
], admin_controller_1.updateStock);
exports.default = router;
//# sourceMappingURL=admin.route.js.map