import { Request,Response } from "express";
import util from 'util'
import { Axios, AxiosError } from "axios";
import axios from '../config';
import { Reliquidacion } from "../models/contratos.interface";

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
        const { data } = await axios.get('/api/Reliquidaciones/ObtenerListaSolicitudesReli',{
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