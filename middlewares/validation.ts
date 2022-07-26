import { NextFunction, Request, Response } from "express";
import { validationResult, CustomValidator } from "express-validator";
import { decode, JwtPayload, verify } from 'jsonwebtoken';
import axios from "../config";

export const verifyToken:CustomValidator = (token: string) =>{
  const result = verify(token,process.env.SECRET_KEY!,{
    ignoreExpiration:false,
  })
  if(!result){
    throw Error('Token de acceso inválido')
  }
  return true
}

export const isAdmin = (permisos:string[]) => (token:string) => {
  const { payload } = decode(token) as JwtPayload;
  //TODO verificar atributo admin?
  return true;
}

export const getRoles = (permisos:string[]) => async(token:string) =>{
  const { payload:{permissions} } = decode(token) as JwtPayload;
  const roles = await axios.get('')
  //TODO verificar roles en listado DB
}

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
