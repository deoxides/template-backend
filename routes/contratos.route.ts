import { Router } from "express";
import { cookie, param, query,body } from "express-validator";
import { getInfo,getContratos ,getConceptos, postContato, getListadoContratos, getDetallesContratos } from '../controllers/contratos.controller';
import { handlerErrorResult, verifyToken } from "../middlewares/validation";

const router = Router();

router.get('/contratos',
[
    cookie('token').notEmpty().custom(verifyToken),
    query('zona','campo obligatorio').notEmpty(),
    query('empresa','campo obligatorio').notEmpty(),
    query('instalacion','campo obligatorio').notEmpty(),
    handlerErrorResult
],getContratos)

router.get('/contratos/:rut',
[
    cookie('token').notEmpty().custom(verifyToken),
    param('rut','campo obligatorio').notEmpty(),
    handlerErrorResult
],getInfo)

router.get('/concepto',[
    cookie('token').notEmpty().custom(verifyToken),
    handlerErrorResult
],getConceptos)

router.post('',
[
    cookie('token').notEmpty().custom(verifyToken),
    body("explicacion").notEmpty(),
    body("nombreContrato").notEmpty(),
    body("nombreInstalacion").notEmpty(),
    body("codigoInstalacion").notEmpty().toInt(),
    body("codigoContrato").notEmpty().toInt(),
    body("codigoPayroll").notEmpty(),
    body("rutBeneficiario").notEmpty(),
    body("nombreBeneficiario").notEmpty(),
    body("fechaInicio").notEmpty(),
    body("fechaTermino").notEmpty(),
    body("dias").notEmpty(),
    body("monto").notEmpty().toInt(),
    body("horas").optional().notEmpty().toInt(),
    body("explicacionConcepto").optional(),
    body("idZona").notEmpty().toInt(),
    body("idConcepto").notEmpty().toInt(),
    body("idEmpresa").notEmpty().toInt(),
    handlerErrorResult
],postContato)

router.get('/listado',[
    cookie('token').notEmpty().custom(verifyToken),
    handlerErrorResult
],getListadoContratos)

router.get('/detalles',[
    cookie('token').notEmpty().custom(verifyToken),
    query('id').notEmpty().isInt().withMessage('Codigo inválido'),
    handlerErrorResult
],getDetallesContratos)

export default router;