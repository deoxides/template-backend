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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStock = exports.getStock = exports.updatePoleron = exports.deletePoleron = exports.newPoleron = exports.getPoleron = void 0;
const models_1 = require("../models");
const getPoleron = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        if (id) {
            const producto = yield models_1.Poleron.findByPk(id, {
                include: [{
                        model: models_1.Inventario,
                        foreignKey: 'id_poleron'
                    }]
            });
            return res.json({
                data: producto,
                ok: true
            });
        }
        else {
            const productos = yield models_1.Poleron.findAll({
                include: [{
                        model: models_1.Inventario,
                        foreignKey: 'id_poleron'
                    }]
            });
            return res.json({
                data: productos,
                ok: true
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(404).end();
    }
});
exports.getPoleron = getPoleron;
const newPoleron = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let body = req.body;
        if (req.file) {
            body.img = req.file.path;
        }
        const poleron = yield models_1.Poleron.create(Object.assign({}, body));
        return res.json({
            msg: 'Nuevo poleron creado',
            data: poleron,
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false
        });
    }
});
exports.newPoleron = newPoleron;
const deletePoleron = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const poleron = yield models_1.Poleron.findByPk(id);
        if (!poleron)
            throw Error('Ningun poleron con ese id');
        yield poleron.destroy();
        return res.json({
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).end();
    }
});
exports.deletePoleron = deletePoleron;
const updatePoleron = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const _c = req.body, { id } = _c, args = __rest(_c, ["id"]);
        if ((_a = req.file) !== null && _a !== void 0 ? _a : req.files) {
            if (req.file) {
                args.img = req.file.path;
            }
            else if (req.files && ((_b = req.files) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                const files = req.files;
                args.img = files[0].path;
            }
            else {
                delete args.img;
            }
        }
        const product = yield models_1.Poleron.findByPk(id);
        if (!product)
            throw Error('No existe el poleron');
        yield product.update(args);
        return res.json({
            data: args,
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).end();
    }
});
exports.updatePoleron = updatePoleron;
const getStock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const stock = yield models_1.Inventario.findOne({
            where: {
                id_poleron: id
            }
        });
        if (!stock)
            throw Error('Ningun stock encontrado');
        return res.json({
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).end();
    }
});
exports.getStock = getStock;
const updateStock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _d = req.body, { id } = _d, args = __rest(_d, ["id"]);
        const stock = yield models_1.Inventario.findOne({
            where: {
                id_poleron: id
            }
        });
        if (!stock)
            throw Error('Ningun stock encontrado');
        console.log(stock);
        yield stock.update(args);
        return res.json({
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).end();
    }
});
exports.updateStock = updateStock;
//# sourceMappingURL=admin.controller.js.map