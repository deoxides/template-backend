import { Request, Response } from "express";
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
        return res.status(err.response?.status || 500).json({
            msg: err.response?.data,
            ok: false
        })
    }
}

export const login = async (req: Request<{}, {}, ILoginRequest>, res: Response) => {
    try {
        const { username, password } = req.body;
        const { data:{token,...args} } = await axios.post<IAuth>(process.env.URL! + '/api/Account/login', {
            username,
            password
        })
        const userInfo = await createToken(args);
        res.cookie('personalInfo',userInfo)
        const {role,perms,name} = decode(token) as JwtPayload;
        return res.cookie('token', token, { httpOnly: true }).json({
            data:{
                name,
                role,
                perms,
                nombreCompleto:args.nombreCompleto,
                zona:args.zona
            },
            ok: true
        })
    } catch (error) {
        const err = error as AxiosError
        console.log(error)
        return res.status(err.response?.status || 400).end()
    }
}

export const logout = (req: Request, res: Response) => {
    try {
        return res.clearCookie('token').clearCookie('personalInfo').json({
            ok:true
        })
    } catch (error) {
        return res.status(500).end()
    }
}

export const checkRol = async (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;
        const { args: [email] } = decode(token) as JwtPayload;


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
        const personalInfo = req.cookies['personalInfo'] as string | undefined
        let info:User | undefined;
        if(personalInfo){
            const {payload:{nombreCompleto,zona}} = decode(personalInfo,{complete:true}) as JwtPayload
            info = {nombreCompleto,zona}
        }
        const { payload:{role,perms,name} } = decode(token, { complete: true, json: true }) as JwtPayload
        return res.json({
            data: {
                role,perms,name,...info
            },
            ok: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).end()
    }
}

export const changePassword = async (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;
        const a = decode(token) as JwtPayload;
    } catch (error) {
        return res.status(500).end()
    }
}