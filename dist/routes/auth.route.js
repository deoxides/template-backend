"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_controller_1 = require("../controllers/auth.controller");
const validation_1 = require("../middlewares/validation");
const router = (0, express_1.Router)();
router.post('/createUser', [
    (0, express_validator_1.body)('rut', 'campo obligatorio').not().isEmpty().bail().isInt({ min: 99999999, max: 999999999 }).withMessage('Rut invalido'),
    (0, express_validator_1.body)('correo', 'campo obligatorio').not().isEmpty().bail().isEmail(),
    (0, express_validator_1.body)('clave', 'campo obligatorio').not().isEmpty().bail().isStrongPassword({ minLength: 8 }).withMessage('Contraseña insegura'),
    (0, express_validator_1.body)('sexo', 'campo obligatorio').not().isEmpty().bail().toUpperCase().isIn(['MASCULINO', 'FEMENINO', 'OTRO']).withMessage('genero inválido'),
    (0, express_validator_1.body)(['nombre', 'apellido', 'direccion'], 'campo obligatorio').not().isEmpty(),
    (0, express_validator_1.body)('celular', 'campo invalido').not().isEmpty().bail().isMobilePhone('es-CL'),
    validation_1.handlerErrorResult
], auth_controller_1.createUser);
router.post('/login', [
    (0, express_validator_1.body)('correo', 'campo obligatorio').notEmpty().bail().isEmail(),
    (0, express_validator_1.body)('clave', 'campo obligatorio').notEmpty(),
    validation_1.handlerErrorResult
], auth_controller_1.login);
router.get('/logout', [
    (0, express_validator_1.cookie)('token', 'ningun token encontrado').notEmpty(),
    validation_1.handlerErrorResult
], auth_controller_1.logout);
router.get('/rol', [
    (0, express_validator_1.cookie)('token', 'ningun token encontrado').notEmpty(),
    validation_1.handlerErrorResult
], auth_controller_1.checkRol);
router.get('/', [
    (0, express_validator_1.cookie)('token', 'ningun token encontrado').notEmpty(),
    validation_1.handlerErrorResult
], auth_controller_1.checkAttributes);
exports.default = router;
//# sourceMappingURL=auth.route.js.map