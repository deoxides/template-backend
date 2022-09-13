import { Request, Response } from "express";
import { Detalle, Reliquidacion } from "../models/contratos.interface";
import { transformFilter } from "../helpers/filters";

export const getInfo = (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;
        const { rut } = req.params;

        return res.json({
            data:{},
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            ok: false
        })
    }
}

export const getContratos = (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;

        return res.json({
            data:{},
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            ok: false
        })
    }
}

export const getConceptos = (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;
        return res.json({
            data:{},
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            ok: false
        })
    }
}

export const postContato = async (req: Request<{}, {}, Reliquidacion>, res: Response) => {
    try {
        const token = req.cookies['token'] as string;
        const args = req.body;
        return res.json({
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            ok: false
        })
    }
}

export const getListadoContratos = async (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;
        const { estado } = req.params
        return res.json({
            data: {},
            ok: true
        })
    } catch (error: any) {
        return res.status( 500).json({
            data: {},
            ok: false
        })
    }
}
export const getDetallesContratos = async (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;
        const { id } = req.query;
    } catch (error) {
        console.log(error)
        return res.status( 500).json({
            data: {},
            ok: false
        })
    }
}

export const validarSolicitud = async (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;
        const { id, estado, validacion, observacion } = req.body
        return res.json({
            data:{},
            ok: true
        })
    } catch (error) {
        return res.status( 500).json({
            data: {},
            ok: false
        })
    }
}

export const eliminarSolicitud = async (req: Request, res: Response) => {
    try {
        const token = req.cookies['token'] as string;
        const { id } = req.params
        return res.json({
            data:{},
            ok: true
        })
    } catch (error) {
        return res.status( 500).json({
            data: {},
            ok: false
        })
    }
}
