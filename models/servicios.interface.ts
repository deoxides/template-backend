export interface IGetZonasEmpresas {
    zonas:    Zona[];
    empresas: Empresa[];
}

export interface Empresa {
    codigo: string;
    nombre: string;
}

export interface Zona {
    codigo: number;
    nombre: string;
}
