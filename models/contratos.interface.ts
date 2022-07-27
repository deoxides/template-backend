export interface IContrato {
    conceptos: Concepto[];
    zonas:     Zona[];
}

export interface Concepto {
    id:                 number;
    descripcion:        string;
    esMonto:            boolean;
    tipo:               string;
    codigo:             number;
    reliReliquidacions?: ReliReliquidacion[];
}

export interface ReliReliquidacion {
    id:                      number;
    explicacion:             string;
    idEmpresa:               number;
    idSolicitante:           number;
    nombreContrato:          string;
    codigoContrato:          number;
    nombreInstalacion:       string;
    codigoInstalacion:       number;
    codigoPayroll:           string;
    rutBeneficiario:         string;
    nombreBeneficiario:      string;
    fechaInicio:             Date;
    fechaTermino:            Date;
    dias:                    string;
    monto:                   number;
    horas:                   number;
    comentarioConcepto:      string;
    idZona:                  number;
    idConcepto:              number;
    idConceptoNavigation:    string;
    idEmpresaNavigation:     IDEmpresaNavigation;
    idSolicitanteNavigation: SistemaUsuario;
    idZonaNavigation:        string;
    reliValidacionRs:        ReliValidacionR[];
}

export interface IDEmpresaNavigation {
    id:                 number;
    nombre:             string;
    codigo:             string;
    reliReliquidacions: string[];
}

export interface SistemaUsuario {
    id:                 number;
    usuario:            string;
    password:           string;
    passwordSalt:       string;
    resetPassword:      boolean;
    nombreCompleto:     string;
    correo:             string;
    activo:             boolean;
    fechaCreacion:      Date;
    idZona:             number;
    rol:                string;
    idPerfil:           number;
    idPerfilNavigation: IDPerfilNavigation;
    idZonaNavigation:   string;
    reliReliquidacions: string[];
    reliValidacionRs:   ReliValidacionR[];
}

export interface IDPerfilNavigation {
    id:                    number;
    nombre:                string;
    sistemaPermisoPerfils: SistemaPermisoPerfil[];
    sistemaUsuarios:       string[];
}

export interface SistemaPermisoPerfil {
    id:                  number;
    idPerfil:            number;
    idPermiso:           number;
    idPerfilNavigation:  string;
    idPermisoNavigation: IDPermisoNavigation;
}

export interface IDPermisoNavigation {
    descripcion:           string;
    codigo:                string;
    id:                    number;
    sistemaPermisoPerfils: string[];
}

export interface ReliValidacionR {
    id:                          number;
    estado:                      string;
    fecha:                       Date;
    idValidador:                 number;
    observaciones:               string;
    numero:                      number;
    idReliquidaciones:           number;
    idReliquidacionesNavigation: string;
    idValidadorNavigation:       string;
}

export interface Zona {
    codigo:             number;
    nombre:             string;
    reliReliquidacions: ReliReliquidacion[];
    sistemaUsuarios?:    SistemaUsuario[];
}

export interface Reliquidacion {
    explicacion?:         string;
    nombreContrato?:      string;
    nombreInstalacion?:   string;
    codigoInstalacion?:   number;
    codigoContrato?:      number;
    codigoPayroll?:       string;
    rutBeneficiario?:     string;
    nombreBeneficiario?:  string;
    fechaInicio?:         Date;
    fechaTermino?:        Date;
    dias?:                string;
    monto?:               number;
    horas?:               number;
    explicacionConcepto?: string;
    idZona?:              number;
    idConcepto?:          number;
    idEmpresa?:           number;
}

export interface Detalle {
    explicacion:        string;
    solicitante:        Solicitante;
    codigoPayroll:      string;
    dias:               string;
    monto:              number;
    horas:              number;
    comentarioConcepto: string;
    validaciones:       Validacione[];
    id:                 number;
    nombreEmpresa:      string;
    nombreInstalacion:  string;
    codigoInstalacion:  number;
    codigoContrato:     number;
    nombreContrato:     string;
    nombreConcepto:     string;
    rutBeneficiario:    string;
    nombreBeneficiario: string;
    zona:               string;
    fechaInicio:        string;
    fechaTermino:       string;
}

export interface Solicitante {
    id:             number;
    nombreCompleto: string;
    correo:         string;
}

export interface Validacione {
    id:                          number;
    estado:                      string;
    fecha?:                       string;
    idValidador?:                 string;
    observaciones?:               string;
    numero:                      number;
    idReliquidaciones:           number;
    idReliquidacionesNavigation?: string;
}

