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
    token:    string;
}