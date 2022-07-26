import { Request,Response } from "express";
import util from 'util'
import { Axios, AxiosError } from "axios";
import axios from '../config';
import { Reliquidacion } from "../models/contratos.interface";
import { transformFilter } from "../helpers/filters";

export const getInfo = async(req:Request,res:Response) => {
    try {
        const token = req.cookies['token'] as string;
        const { rut } = req.params;
        const { data } = await axios.get('/api/Reliquidaciones/buscarPersonaPayRoll/' + rut,{
            headers:{
                'Authorization':`Bearer ${token}`
            },
        })

        return res.json({
            data,
            ok:true
        })
    } catch (error) {
        const err = error as AxiosError;
        return res.status(err.response?.status || 500).json({
            data:(err.response?.data as any)?.title,
            ok:false
        })
    }
}

export const getContratos = async(req:Request,res:Response) => {
    try {
        const token = req.cookies['token'] as string;
        const { zona,empresa, instalacion } = req.query;
        const { data } = await axios.post('/api/Reliquidaciones/buscarContratosJustime',{
            codigoEmpresa:empresa,
            codigoZona:zona,
            codigoInstalacion:instalacion
        },{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })

        return res.json({
            data,
            ok:true
        })
    } catch (error) {
        const err = error as AxiosError;
        return res.status(err.response?.status || 500).json({
            data:(err.response?.data as any)?.title,
            ok:false
        })
    }
}

export const getConceptos = async(req:Request,res:Response) => {
    try {
        const token = req.cookies['token'] as string;
        const { data } = await axios.get('/api/Reliquidaciones/obtenerDatosFormulario',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return res.json({
            data,
            ok:true
        })
    } catch (error) {
        const err = error as AxiosError;;
        return res.status(err.response?.status || 500).json({
            data:(err.response?.data as any)?.title,
            ok:false
        })
    }
}

export const postContato = async(req:Request<{},{},Reliquidacion>,res:Response) => {
    try {
        const token = req.cookies['token'] as string;
        const args = req.body;
        const response = await axios.post('/api/Reliquidaciones/subirFormReliquidaciones',
        {
            ...args
        },
        {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return res.json({
            ok:true
        })
    } catch (error) {
        const err = error as AxiosError;
        return res.status(err.response?.status || 500).json({
            data:(err.response?.data as any)?.title,
            ok:false
        })
    }
}

export const getListadoContratos = async(req:Request,res:Response) => {
    try {
        const token = req.cookies['token'] as string;
        const filters = Object.entries(req.query).map(([key,value]) => {  
            const propiedad = transformFilter(key)
            return {
                propiedad,
                valor:value
            }
        })
        const { data } = await axios.post('/api/Reliquidaciones/ObtenerListaSolicitudesReli',{
            
                "inicio": 0,
                "termino": 50,
                "tipo": "propio",
                "filtros": [...(filters)]
        },{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return res.json({
            count:data.cuenta,
            data:data.filas,
            ok:true
        })
    } catch (error:any) {
        const err = error as AxiosError;
        console.log((err))
        return res.status(err.response?.status || 500).json({
            data:(err.response?.data as any)?.title,
            errors: (err.response?.data as any)?.errors,
            ok:false
        })
    }
}
export const getDetallesContratos = async(req:Request,res:Response) => {
    try {
        const token = req.cookies['token'] as string;
        const { id } =req.query;
        const { data } = await axios.get('/api/Reliquidaciones/ObtenerCuerpoSolicitudesReli',{
            params:{
                'idReliquidacion':id
            },
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return res.json({
            data,
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