import { AxiosError } from "axios";
import { Request,Response } from "express";
import { IGetZonasEmpresas } from "../models/servicios.interface";
import axios from './../config';

export const getZonas = async(req:Request,res:Response) =>{
    try {
        const token = req.cookies['token'] as string;
        const { data:{zonas,empresas} } = await axios.get<IGetZonasEmpresas>('/api/servicios/ObtenerEmpresasYZonas',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        const zonasMap = zonas.map(({codigo,nombre}) => {
            return {
                codigozona:codigo,
                zona:nombre
            }
        } ) 
        return res.json({
            data:{
                zonas:zonasMap,
                empresas
            },
            ok:true
        })
    } catch (error) {
        console.log(error)
        const err = error as AxiosError;
        return res.status(err.response?.status || 500).json({
            data:(err.response?.data as any)?.title,
            ok:false
        })
    }
}