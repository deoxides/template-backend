import { Router } from "express";
import { body, cookie } from "express-validator";
import { checkAttributes, checkRol, createUser, login, logout } from "../controllers/auth.controller";
import { handlerErrorResult, isAdmin, verifyToken } from "../middlewares/validation";

const router = Router();

router.post('/createUser',
  [
    cookie('token','ningun token encontrado').notEmpty().custom(verifyToken),
    body('username','campo obligatorio').notEmpty(),
    body('password','campo obligatorio').notEmpty().bail().isStrongPassword({minLength:8}).withMessage('Contraseña insegura'),
    body('zona','campo obligatorio').notEmpty().bail(),
    // body('correo','campo obligatorio').notEmpty().bail().isEmail(),
    handlerErrorResult
  ],createUser
)

router.post('/changePassword')

router.post('/login',
  [
    body('username','campo obligatorio').notEmpty(),
    body('password','campo obligatorio').notEmpty(),
    handlerErrorResult
  ],login)

router.get('/logout',[
  cookie('token','ningun token encontrado').notEmpty().custom(verifyToken),
  handlerErrorResult
],logout)

router.get('/rol',[
  cookie('token','ningun token encontrado').notEmpty().custom(verifyToken),
  handlerErrorResult
],checkRol)

router.get('/',[
  cookie('token','ningun token encontrado').notEmpty().custom(verifyToken),
  handlerErrorResult
],checkAttributes)


export default router