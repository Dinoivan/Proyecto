import axios from 'axios';
import { API } from '../../constants/env';

const basePathfindAll = "/api"

//Servicio para migrar pedidos
export async function MigrarPedidosExportaciones(token,requestNumbers,society_Value){

    const body = {request_numbers: requestNumbers,society_value: society_Value}
    try{
        const response = await axios.post(`${API}${basePathfindAll}/exportation-job`,body,{
            headers: {
                Authorization: `Token ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }catch(error){
        console.error("Error al migrar pedidos: ",error);
        return {error: "Ocurrio un error al migrar pedidos"}
    }
}

//Servicio para listar pedidos
export async function FindAllPedidos(token){
    try{
        const response =  await axios.get(`${API}${basePathfindAll}/exportation-detail/`,{
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data.result;
    }catch(error){
        console.error("Error al obtener los datos del usuario: ",error);
        return {error: `Error al obtener la lista de pedidos`}
    }
}


//Servicio para filtrar pedidos
export async function FiltrarPedidos(token,params){
    try{
        const queryParams = new URLSearchParams();

        for(const [key,value] of Object.entries(params)){
            if (value){
                if(key === 'has_file' && !['true',true,'false',false].includes(value.toString())){
                    continue;
                }
                queryParams.append(key,value);
            }
        }

        const queryString = queryParams.toString();
        const apiUrl = queryString ? `${basePathfindAll}/exportation-detail/?${queryString}` : `${basePathfindAll}/exportation-detail/`;

        const response = await axios.get(`${API}${apiUrl}`,{
            headers: {
                Authorization: `Token ${token}`,
            },
        });

        return response.data.result;

    }catch(error){
        console.error("Error al filtrar pedidos");
        return {error: `Error al filtrar pedidos en la plataforma`}
    };
}


//Servicio para eliminar pedidos
export async function EliminarPedidos(token,pedidosEliminados){
    try{
        const response = await axios.delete(`${API}${basePathfindAll}/exportation-detail/`,{
            headers: {
                Authorization: `Token ${token}`,
                'Content-Type': 'application/json',
            },
            data: pedidosEliminados
        });
    }catch(error){
        console.error("Error al eliminar pedidos: ",error);
        return {error: `Sucedió un error al eliminar pedidos`}
    }
}

//Responsables de exportaciones
export async function ResposablesExportaciones(token){
    try{
        const response = await axios.get(`${API}${basePathfindAll}/responsable/?type=REGULAR`,{
            headers: {
                Authorization: `Token ${token}`
            },
        });
        const responsableNombres = response.data.result.map((usuario) => usuario.name);
        return responsableNombres;
    }catch(error){
        console.error("Error al recuperar usuarios exportaciones",error);
        return {error: "Error al recuperar respesables de exportaciones"}
    }
}

