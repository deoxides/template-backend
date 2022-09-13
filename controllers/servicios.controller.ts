import { AxiosError } from "axios";
import { Request,Response } from "express";
import { IGetZonasEmpresas } from "../models/servicios.interface";

export const getZonas = async(req:Request,res:Response) =>{
    try {
        const token = req.cookies['token'] as string;
        
        return res.json({
            data:{},
            ok:true
        })
    } catch (error) {
        console.log(error)
        const err = error as AxiosError;
        return res.status( 500).json({
            data:(err.response?.data as any)?.title,
            ok:false
        })
    }
}