
export const transformFilter = (propiedad:string) => {
    if(propiedad == 'id'){
        return 'Id_eq'
    }
    if(propiedad == 'descripcion'){
        return 'IdConceptoNavigation/Descripcion_in'
    }
    if (propiedad == 'nombre'){
        return 'IdEmpresaNavigation/Nombre_in'
    } 
    if(propiedad == 'idZona'){
        return 'IdZona_eq'
    }
    if(propiedad == 'idInstalacion' || propiedad == 'idContrato'){
        return `${propiedad.replace('id','Codigo')}_eq`
    }
    return `${propiedad.charAt(0).toUpperCase() + propiedad.slice(1)}_in`
}