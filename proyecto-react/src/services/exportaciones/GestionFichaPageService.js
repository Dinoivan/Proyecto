import axios from 'axios';
import { API } from '../../constants/env';

const basePathfindAll = "/api"

//Servicio para crear Ficha
export async function CrearFicha(token,body){
    try{
        const response = await axios.post(`${API}${basePathfindAll}/exportations/`,body,{
            headers: {
                Authorization: `Token ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }catch(error){
        console.error("Error al crear ficha: ",error);
        return {error: "Error en la creación de ficha"}
    }
}

//Servicio para asignar pedidos a una ficha
export async function AsignarPedidosFichas(token,arregloPedidos){
    try{
        const response = await axios.put(`${API}${basePathfindAll}/exportation-detail/`,arregloPedidos,{
            headers: {
                Authorization: `Token ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }catch(error){
        console.error("Erro al asignar ficha");
        return {error: "Error al aseignar pedidos a ficha"}
    }
}