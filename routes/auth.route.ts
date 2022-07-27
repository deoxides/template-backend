import { Router } from "express";
import { body, cookie } from "express-validator";
import { checkAttributes, checkRol, createUser, login, logout } from "../controllers/auth.controller";
import { handleErrorResult, isAdmin, verifyToken } from "../middlewares/validation";

const router = Router();

router.post('/createUser',
  [
    cookie('token','ningun token encontrado').notEmpty().custom(verifyToken),
    body('username','campo obligatorio').notEmpty(),
    body('password','campo obligatorio').notEmpty().bail().isStrongPassword({minLength:8}).withMessage('Contraseña insegura'),
    body('zona','campo obligatorio').notEmpty().bail(),
    // body('correo','campo obligatorio').notEmpty().bail().isEmail(),
    handleErrorResult()
  ],createUser
)

router.post('/changePassword')

router.post('/login',
  [
    body('username','campo obligatorio').notEmpty(),
    body('password','campo obligatorio').notEmpty(),
    handleErrorResult()
  ],login)

router.get('/logout',[
  cookie('token','ningun token encontrado').notEmpty().custom(verifyToken),
  handleErrorResult()
],logout)

router.get('/rol',[
  cookie('token','ningun token encontrado').notEmpty().custom(verifyToken),
  handleErrorResult()
],checkRol)

router.get('',[
  cookie('token','ningun token encontrado').notEmpty().custom(verifyToken),
  handleErrorResult(true)
],checkAttributes)


export default router