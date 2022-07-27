import { Router } from "express";
import { cookie, param, query,body } from "express-validator";
import { getInfo,getContratos ,getConceptos, postContato, getListadoContratos, getDetallesContratos, validarSolicitud, eliminarSolicitud } from '../controllers/contratos.controller';
import { handleErrorResult, verifyToken } from "../middlewares/validation";

const router = Router();

router.post('/solicitud',[
    cookie('token').notEmpty().custom(verifyToken),
    body('id').notEmpty().toInt().isInt(),
    body('estado').notEmpty().isIn(['v','p','r']),
    body('observacion'),
    body('validacion').notEmpty().isInt(),
    handleErrorResult()
],validarSolicitud)

router.delete('/solicitud/:id',[
    cookie('token').notEmpty().custom(verifyToken),
    param('id').notEmpty().toInt().isInt().withMessage('El id debe ser numerico'),
    handleErrorResult()
],eliminarSolicitud)

router.get('/contratos',
[
    cookie('token').notEmpty().custom(verifyToken),
    query('zona','campo obligatorio').notEmpty(),
    query('empresa','campo obligatorio').notEmpty(),
    query('instalacion','campo obligatorio').notEmpty(),
    handleErrorResult()
],getContratos)

router.get('/contratos/:rut',
[
    cookie('token').notEmpty().custom(verifyToken),
    param('rut','campo obligatorio').notEmpty(),
    handleErrorResult()
],getInfo)

router.get('/concepto',[
    cookie('token').notEmpty().custom(verifyToken),
    handleErrorResult()
],getConceptos)

router.post('',
[
    cookie('token').notEmpty().custom(verifyToken),
    body("explicacion"),
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
    handleErrorResult()
],postContato)

router.get('/listado/:estado',[
    cookie('token').notEmpty().custom(verifyToken),
    param('estado').optional().toLowerCase().isIn(['propio','pendiente','terminado']),
    query('id').optional().isInt().withMessage('El id debe ser numerico'),
    query('idContrato').optional().isInt().withMessage('El id del contrato debe ser numerico'),
    query('idInstalacion').optional().isInt().withMessage('El id de la instalacion debe ser numerico'),
    query('contrato').optional(),
    query('empresa').optional(),
    query('instalacion').optional(),
    query('motivo').optional(),
    query('beneficiario').optional(),
    query('validacion').optional(),
    query('zona').optional(),
    handleErrorResult()
],getListadoContratos)

router.get('/detalles',[
    cookie('token').notEmpty().custom(verifyToken),
    query('id').notEmpty().isInt().withMessage('Codigo inválido'),
    handleErrorResult()
],getDetallesContratos)

router.get('/zonas',[
    cookie('token').notEmpty().custom(verifyToken),
    handleErrorResult()
])

export default router;