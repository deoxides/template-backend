export interface IRegistrarRequest {
    username: string;
    password: string;
    idZona:   number;
}

export interface ILoginRequest{
    username:string;
    password:string;
}

export interface IAuth {
    username: string;
    nombreCompleto: string;
    zona:string;
    token:    string;
}

export interface User {
    username?: string;
    nombreCompleto?: string;
    zona?:string;
}