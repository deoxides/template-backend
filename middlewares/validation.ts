import { NextFunction, Request, Response } from "express";
import { validationResult, CustomValidator } from "express-validator";
import { decode, JwtPayload, verify } from 'jsonwebtoken';

//verificar Json web token
export const verifyToken:CustomValidator = (token: string) =>{
  const result = verify(token,process.env.SECRET_KEY!,{
    ignoreNotBefore:true
  })
  if(!result){
    throw Error('Token de acceso inválido')
  }
  return true
}

//Retornar errores
export const handleErrorResult = (bypass:boolean = false) => (req: Request,res: Response,next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if(bypass) return res.status(200).end()
    return res.status(400).json({
      errors,
    });
  }
  next();
};
