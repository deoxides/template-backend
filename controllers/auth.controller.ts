import { Request, Response } from "express";
import { encryptPassword, comparePassword } from '../helpers/bcrypt';
//Usuario
import { IAuth, ILoginRequest, IRegistrarRequest } from '../models';
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
        console.log(err)
        return res.status(err.response?.status || 500).json({
            msg: err.response?.data,
            ok: false
        })
    }
}

export const login = async (req: Request<{}, {}, ILoginRequest>, res: Response) => {
    try {
        const { username, password } = req.body;
        const { data } = await axios.post<IAuth>(process.env.URL! + '/api/Account/login', {
            username,
            password
        })
        return res.cookie('token', data.token, { httpOnly: false }).json({
            token: data.token,
            ok: true
        })
    } catch (error) {
        const err = error as AxiosError
        console.log(err)
        return res.status(err.response?.status || 400).end()
    }
}

export const logout = (req: Request, res: Response) => {
    try {
        return res.clearCookie('token').status(200).end()
    } catch (error) {
        console.log('Logout', error)
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
        const { payload:{role,perms,name} } = decode(token, { complete: true, json: true }) as JwtPayload
        return res.json({
            data: {
                role,perms,name
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