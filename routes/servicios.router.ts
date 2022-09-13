import { Router } from "express";
import { cookie, param, query,body } from "express-validator";
import { getZonas } from '../controllers/servicios.controller';
import { handleErrorResult, verifyToken } from "../middlewares/validation";

const router = Router();

router.get('/zonas',[
    body(['nombre','apellido']).notEmpty(),
    handleErrorResult
],getZonas)

export default router;