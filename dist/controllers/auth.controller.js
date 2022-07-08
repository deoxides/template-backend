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
exports.updateAttributes = exports.checkAttributes = exports.checkRol = exports.logout = exports.login = exports.createUser = void 0;
const bcrypt_1 = require("../helpers/bcrypt");
//Usuario
const models_1 = require("../models");
const jwt_1 = require("../helpers/jwt");
const jsonwebtoken_1 = require("jsonwebtoken");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const userExists = yield models_1.Usuario.findByPk(body.rut);
        if (userExists)
            throw Error('El usuario ya existe');
        const password = (0, bcrypt_1.encryptPassword)(body.clave);
        yield models_1.Usuario.create({
            rut: body.rut,
            nombre: body.nombre,
            apellido: body.apellido,
            sexo: body.sexo,
            correo: body.correo,
            clave: password,
            celular: body.celular,
            direccion: body.direccion,
            rol: body.rol || 'cliente'
        });
        return res.json({
            msg: 'Usuario creado',
            ok: true
        });
    }
    catch (error) {
        return res.status(400).json({
            msg: error === null || error === void 0 ? void 0 : error.message,
            ok: false
        });
    }
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { correo, clave } = req.body;
        const userExists = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!userExists)
            throw Error('El usuario no existe');
        const { nombre, clave: password, rol } = userExists.get();
        if (!(0, bcrypt_1.comparePassword)(clave, password)) {
            return res.status(400).json({
                msg: 'Correo o clave invalida',
                ok: true
            });
        }
        const token = yield (0, jwt_1.createToken)(correo, nombre);
        return res.cookie('token', token, { httpOnly: true }).json({
            token: token,
            rol,
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).end();
    }
});
exports.login = login;
const logout = (req, res) => {
    try {
        return res.clearCookie('token').json({
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).end();
    }
};
exports.logout = logout;
const checkRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies['token'];
        const { args: [correo] } = (0, jsonwebtoken_1.decode)(token);
        const user = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!user)
            throw Error('El usuario no existe');
        return res.json({
            data: user.get('rol'),
            ok: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).end();
    }
});
exports.checkRol = checkRol;
const checkAttributes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies['token'];
        const { args: [correo] } = (0, jsonwebtoken_1.decode)(token);
        const user = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!user)
            throw Error('El usuario no existe');
        const _a = user.get(), { clave, rol } = _a, args = __rest(_a, ["clave", "rol"]);
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
exports.checkAttributes = checkAttributes;
const updateAttributes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies['token'];
        const {} = req.body;
        const { args: [correo] } = (0, jsonwebtoken_1.decode)(token);
        const user = yield models_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!user)
            throw Error('El usuario no existe');
    }
    catch (error) {
        return res.status(500).end();
    }
});
exports.updateAttributes = updateAttributes;
//# sourceMappingURL=auth.controller.js.map