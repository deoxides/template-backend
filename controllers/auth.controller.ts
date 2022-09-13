import { Request, Response } from "express";
//Encriptacion de contraseñas
import { encryptPassword, comparePassword } from '../helpers/bcrypt';
//Usuario
import { IAuth, ILoginRequest, IRegistrarRequest, User } from '../models';
import { createToken } from '../helpers/jwt';
import { decode, JwtPayload } from "jsonwebtoken";
import axios, { AxiosError } from "axios";

export const createUser = async (req: Request<{}, {}, IRegistrarRequest>, res: Response) => {
    try {
        const { username, password, idZona } = req.body;
        const response = await axios.post<IRegistrarRequest, IAuth>(process.env.URL! + '/api/Account/register', {
            username,
            password,
            idZona
        })
        return res.json({
            msg: 'Usuario creado',
            ok: true
        })
    } catch (error: any) {
        const err = error as AxiosError;
        return res.status( 500).json({
            msg: err.response?.data,
            ok: false
        })
    }
}

export const login = async (req: Request<{}, {}, ILoginRequest>, res: Response) => {
    try {
        const { username, password } = req.body;
        const args = {
            item1:1,
            item2:'2'
        }
        //Crea un token con informacion
        const userInfo = await createToken(args);
        //Configura una cookie para el cliente que hizo la peticion
        return res.cookie('token', userInfo, { httpOnly: true }).json({
            data:{},
            ok: true
        })
    } catch (error) {
        //Finaliza la solicitud con un 400 en caso de error
        return res.status( 400).end();
    }
}

export const logout = (req: Request, res: Response) => {
    try {
        //Elimina las coolies que se generaron al desloguearse
        return res.clearCookie('token').json({
            ok:true
        })
    } catch (error) {
        return res.status(500).end()
    }
}

export const checkRol = async (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;
        //Contiene lo que se guardo en el token, en este caso linea 34
        //  item1:1,
        //  item2:'2'
        const { args } = decode(token) as JwtPayload;

        return res.json({
            ok: true
        })
    } catch (error) {
        console.log(error)
        return res.status(404).end()
    }
}

export const checkAttributes = async (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;

        const { args } = decode(token, { complete: true, json: true }) as JwtPayload
        return res.json({
            data: {},
            ok: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).end()
    }
};