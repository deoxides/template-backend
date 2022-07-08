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
exports.confirmPayment = exports.getTransactionDetails = exports.initPayTransbank = exports.getCalles = exports.getComunas = exports.getRegions = exports.calcShipment = exports.createDesign = exports.getCart = exports.deleteFromCart = exports.removeFromCart = exports.addToCart = exports.getProductById = exports.getProducts = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const short_uuid_1 = __importDefault(require("short-uuid"));
const transbank_sdk_1 = require("transbank-sdk");
const axios_1 = __importDefault(require("axios"));
const models_1 = require("../models");
const products_1 = require("../models/products");
const sequelize_1 = require("sequelize");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_1.Poleron.findAll();
        return res.json({
            data: products,
            ok: true
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false
        });
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield products_1.Poleron.findByPk(id, {
            include: {
                model: products_1.Inventario,
                attributes: ['cantidad']
            }
        });
        if (!product)
            throw Error('Ningun producto encontrado');
        return res.json({
            data: product,
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).end();
    }
});
exports.getProductById = getProductById;
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies['token'];
        const body = req.body;
        const { args: [correo, nombre] } = (0, jsonwebtoken_1.decode)(token);
        const user = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!user)
            throw Error(`Ningun usuario con el correo ${correo}`);
        const [cart] = yield products_1.Carrito.findOrCreate({
            defaults: {
                total: 0
            },
            where: {
                usuario: user.get('rut'),
                pagado: false
            },
            order: [['id', 'ASC']],
            limit: 1
        });
        const [product] = yield products_1.Carrito_Poleron.findOrCreate({
            defaults: {
                cantidad: 0
            },
            where: {
                id_carrito: cart.get('id'),
                id_poleron: body.id
            }
        });
        product.increment('cantidad', {
            by: body.cantidad || 1
        });
        product.save();
        return res.json({
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});
exports.addToCart = addToCart;
const removeFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies['token'];
        const body = req.body;
        const { args: [correo, nombre] } = (0, jsonwebtoken_1.decode)(token);
        const user = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!user)
            throw Error(`Ningun usuario con el correo ${correo}`);
        const [cart] = yield products_1.Carrito.findOrCreate({
            defaults: {
                total: 0
            },
            where: {
                usuario: user.get('rut'),
                pagado: false
            },
            order: [['id', 'ASC']],
            limit: 1
        });
        const product = yield products_1.Carrito_Poleron.findOne({
            where: {
                id_carrito: cart.get('id'),
                id_poleron: body.id
            }
        });
        if (!product)
            throw Error('No existe el producto en el carrito');
        product.decrement('cantidad', {
            by: (body === null || body === void 0 ? void 0 : body.cantidad) || 1
        });
        if (product.get('cantidad') < 1) {
            product.destroy();
        }
        product.save();
        return res.json({
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).end();
    }
});
exports.removeFromCart = removeFromCart;
const deleteFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies['token'];
        const body = req.body;
        const { args: [correo, nombre] } = (0, jsonwebtoken_1.decode)(token);
        const user = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!user)
            throw Error(`Ningun usuario con el correo ${correo}`);
        const cart = yield products_1.Carrito.findOne({
            where: {
                usuario: user.get('rut'),
                pagado: false
            },
            order: [['id', 'ASC']],
            limit: 1
        });
        if (!cart)
            throw Error('Ningun producto en el carrito');
        yield products_1.Carrito_Poleron.destroy({
            where: {
                id_poleron: body.id,
                id_carrito: cart.get('id')
            }
        });
        products_1.Carrito_Poleron.afterSave;
        return res.json({
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});
exports.deleteFromCart = deleteFromCart;
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies['token'];
        const { args: [correo, nombre] } = (0, jsonwebtoken_1.decode)(token);
        const user = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!user)
            throw Error(`Ningun usuario con el correo ${correo}`);
        const [cart] = yield products_1.Carrito.findOrCreate({
            defaults: {
                total: 0
            },
            where: {
                usuario: user.get('rut'),
                pagado: false
            },
            order: [['id', 'ASC']],
            limit: 1,
            include: [
                {
                    model: products_1.Poleron,
                    foreignKey: 'id_poleron'
                }
            ]
        });
        return res.json({
            data: cart.get(),
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});
exports.getCart = getCart;
const createDesign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.createDesign = createDesign;
const calcShipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies['token'];
        const { args: [correo, nombre] } = (0, jsonwebtoken_1.decode)(token);
        const { county } = req.query;
        const user = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!user)
            throw Error(`Ningun usuario con el correo ${correo}`);
        const cart = yield products_1.Carrito.findOne({
            where: {
                usuario: user.get('rut'),
                pagado: false
            },
            order: [['id', 'ASC']],
            limit: 1
        });
        if (!cart)
            throw Error('Ningun carrito encontrado');
        const productos = yield products_1.Carrito_Poleron.findOne({
            attributes: [
                [(0, sequelize_1.fn)('sum', (0, sequelize_1.col)('cantidad')), 'cantidad']
            ],
            where: {
                id_carrito: cart.get('id')
            }
        });
        const cantidad = productos === null || productos === void 0 ? void 0 : productos.get('cantidad');
        let order = {
            package: {
                weight: (cantidad * 0.500).toString(),
                height: (cantidad * 10).toString(),
                length: "40",
                width: "40"
            },
            deliveryTime: 2,
            declaredWorth: (15000 * cantidad).toString(),
            productType: 3,
            originCountyCode: 'STGO',
            destinationCountyCode: county,
            contentType: 1
        };
        const response = yield axios_1.default.post('https://testservices.wschilexpress.com/rating/api/v1/rates/courier', Object.assign({}, order), {
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.CHILEXPRESS_COTIZADOR
            }
        });
        return res.json({
            data: response.data.data,
            ok: true
        });
    }
    catch (err) {
        return res.status(401).json({
            ok: false
        });
    }
});
exports.calcShipment = calcShipment;
const getRegions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = yield axios_1.default.get('https://testservices.wschilexpress.com/georeference/api/v1/regions', {
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.CHILEXPRESS_COBERTURA
            }
        });
        return res.json({
            data: response.data.regions,
            ok: true
        });
    }
    catch (err) {
        return res.status(401).json({
            ok: false
        });
    }
});
exports.getRegions = getRegions;
const getComunas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { RegionCode, type } = req.query;
        const response = yield axios_1.default.get('https://testservices.wschilexpress.com/georeference/api/v1/coverage-areas', {
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.CHILEXPRESS_COBERTURA
            },
            params: {
                'RegionCode': RegionCode,
                'type': type || 1
            }
        });
        return res.json({
            data: response.data.coverageAreas,
            ok: true
        });
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({
            ok: false
        });
    }
});
exports.getComunas = getComunas;
const getCalles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.query;
        const response = yield axios_1.default.post('https://testservices.wschilexpress.com/georeference/api/v1/streets/search', Object.assign({}, body), {
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.CHILEXPRESS_COBERTURA
            },
            params: {
                'limit': 10
            }
        });
        return res.json({
            data: response.data.streets,
            ok: true
        });
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({
            ok: false
        });
    }
});
exports.getCalles = getCalles;
const initPayTransbank = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies['token'];
        const { body: { envio, detalles } } = req.body;
        const { args: [correo, nombre] } = (0, jsonwebtoken_1.decode)(token);
        const user = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!user)
            throw Error('El usuario no existe');
        const cart = yield products_1.Carrito.findOne({
            where: {
                usuario: user.get('rut'),
                pagado: false
            },
            order: [['id', 'ASC']],
            limit: 1,
            attributes: ['id', 'total']
        });
        if (!cart)
            throw Error('Ningun carrito encontrado');
        const total = cart.get('total');
        yield products_1.Orden.findOrCreate({
            defaults: {
                region: detalles.region,
                comuna: detalles.comuna,
                calle: detalles.direccion + ' ' + detalles.numeracion,
                costo_envio: envio
            },
            where: {
                id_carrito: cart.get('id')
            }
        });
        const tx = new transbank_sdk_1.WebpayPlus.Transaction(new transbank_sdk_1.Options(transbank_sdk_1.IntegrationCommerceCodes.WEBPAY_PLUS, transbank_sdk_1.IntegrationApiKeys.WEBPAY, transbank_sdk_1.Environment.Integration));
        const buyOrder = short_uuid_1.default.generate();
        const session = req.sessionID;
        const response = yield tx.create(buyOrder, session, Number(total) + (envio || 0), 'https://jsj-stitch.herokuapp.com/pay');
        return res.json({
            token: response.token,
            url: response.url
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false
        });
    }
});
exports.initPayTransbank = initPayTransbank;
const getTransactionDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.query.token;
        const tx = new transbank_sdk_1.WebpayPlus.Transaction(new transbank_sdk_1.Options(transbank_sdk_1.IntegrationCommerceCodes.WEBPAY_PLUS, transbank_sdk_1.IntegrationApiKeys.WEBPAY, transbank_sdk_1.Environment.Integration));
        const response = yield tx.status(token);
        const cart = yield products_1.Pago.findOne({
            where: {
                orden_compra: response.buy_order
            },
            include: [
                {
                    model: products_1.Carrito,
                    foreignKey: 'id_carrito',
                    required: true,
                    include: [
                        {
                            model: products_1.Poleron
                        },
                        {
                            model: products_1.Orden,
                            foreignKey: 'id_carrito'
                        }
                    ]
                }
            ]
        });
        return res.json({
            data: {
                transaction: response,
                cart: cart
            },
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});
exports.getTransactionDetails = getTransactionDetails;
const confirmPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token_ws = req.query.token_ws;
        const token = req.cookies['token'];
        const { args: [correo, nombre] } = (0, jsonwebtoken_1.decode)(token);
        const user = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!user)
            throw Error('El usuario no existe');
        const tx = new transbank_sdk_1.WebpayPlus.Transaction(new transbank_sdk_1.Options(transbank_sdk_1.IntegrationCommerceCodes.WEBPAY_PLUS, transbank_sdk_1.IntegrationApiKeys.WEBPAY, transbank_sdk_1.Environment.Integration));
        const response = yield tx.commit(token_ws);
        if (response.response_code != 0 && response.status !== 'AUTHORIZED') {
            return res.status(403).end();
        }
        const cart = yield products_1.Carrito.findOne({
            where: {
                usuario: user.get('rut'),
                pagado: false
            },
            order: [['id', 'ASC']],
            limit: 1
        });
        if (!cart)
            throw Error('Ningun carrito encontrado');
        yield products_1.Pago.create({
            orden_compra: response.buy_order,
            metodo_pago: response.payment_type_code,
            id_carrito: cart === null || cart === void 0 ? void 0 : cart.get('id')
        });
        cart.set('pagado', true);
        yield cart.save();
        return res.json({
            data: {
                transaction_details: response,
                cart: cart === null || cart === void 0 ? void 0 : cart.get()
            },
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});
exports.confirmPayment = confirmPayment;
//# sourceMappingURL=marketplace.controller.js.map