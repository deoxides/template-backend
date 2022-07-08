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
const marketplace_controller_1 = require("../controllers/marketplace.controller");
const validation_1 = require("../middlewares/validation");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: (0, multer_1.diskStorage)({
        destination: 'uploads/custom',
        filename(req, file, callback) {
            callback(null, file.originalname);
        },
    }),
});
router.get('/', marketplace_controller_1.getProducts);
router.post('/product', [
    upload.single('img'),
    validation_1.handlerErrorResult
], admin_controller_1.newPoleron);
router.get('/product/:id', [
    (0, express_validator_1.param)('id', 'campo obligatorio').notEmpty().bail().isNumeric(),
    validation_1.handlerErrorResult
], marketplace_controller_1.getProductById);
router.get('/cart', [
    (0, express_validator_1.cookie)('token').notEmpty().withMessage('Ningun token de acceso'),
    validation_1.handlerErrorResult
], marketplace_controller_1.getCart);
router.post('/addCart', [
    (0, express_validator_1.cookie)('token').notEmpty().withMessage('Ningun token de acceso'),
    (0, express_validator_1.body)('id', 'campo obligatorio'),
    validation_1.handlerErrorResult
], marketplace_controller_1.addToCart);
router.post('/removeCart', [
    (0, express_validator_1.cookie)('token').notEmpty().withMessage('Ningun token de acceso'),
    (0, express_validator_1.body)('id', 'campo obligatorio'),
    validation_1.handlerErrorResult
], marketplace_controller_1.removeFromCart);
router.delete('/cart', [
    (0, express_validator_1.cookie)('token').notEmpty().withMessage('Ningun token de acceso'),
    (0, express_validator_1.body)('id', 'campo obligatorio'),
    validation_1.handlerErrorResult
], marketplace_controller_1.deleteFromCart);
//API
router.get('/regions', marketplace_controller_1.getRegions);
router.get('/comunas', [
    (0, express_validator_1.query)('RegionCode', 'Parametro obligatorio').notEmpty(),
    validation_1.handlerErrorResult
], marketplace_controller_1.getComunas);
router.get('/calles', [
    (0, express_validator_1.query)(['countyName', 'streetName'], 'campo obligatorio').notEmpty(),
    validation_1.handlerErrorResult
], marketplace_controller_1.getCalles);
router.get('/shipment', [
    (0, express_validator_1.query)('county', 'campo obligatorio').notEmpty(),
    validation_1.handlerErrorResult
], marketplace_controller_1.calcShipment);
router.post('/pay', [
    (0, express_validator_1.cookie)('token', 'ningun token de acceso').notEmpty(),
    (0, express_validator_1.body)(['envio', 'detalles']).optional().isNumeric(),
    validation_1.handlerErrorResult
], marketplace_controller_1.initPayTransbank);
router.get('/pay/details', [
    (0, express_validator_1.query)('token').notEmpty(),
    validation_1.handlerErrorResult
], marketplace_controller_1.getTransactionDetails);
router.get('/payed', marketplace_controller_1.confirmPayment);
exports.default = router;
//# sourceMappingURL=marketplace.route.js.map