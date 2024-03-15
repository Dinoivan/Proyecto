import {API} from "../../constants/env"
import axios from "axios";

const basePath = "/api/user";

//Servicio para validar si el usuario esta registrado en la plataforma
export  async function UserVerification(email){
    try{
        const response = await axios.get(`${API}${basePath}/find-by-email/${email}`)
        return response.data.status;
    }catch(error){
        console.error("Error al validar el usuario",error);
        return {error: `Usuario no encontrado en el sistema -> Error: ${error.response.status}`};
    }
}


//Servicio para enviar codigo de cambio de contraseña al correo electrónico
export async function Forgotpassword(username) {

    const body = {username: username};

    try{
        const response = await axios.post(`${API}/forgotpassword/`, body,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
                                                            
    if(response.status === 200){
        return response.data;
    }

    }catch(error){
        console.error("Error al enviar el código de cambio de contraseña: ", error);
        return {error: `Error al enviar código de verificación -> Error: ${error.response.status}`};
    }
   
}

//Servicio para confirmar codigo e ingresar la nueva contraseña
export async function ConfirmVerificationCode(newcode, newPassword){

    const body = { code: newcode,password: newPassword};

    try{
        const response = await axios.post(`${API}/confirmforgotpassword/`,body,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    return response.status;
    
    
  }catch(error){
    console.error("Error al confirmar el código y establecer la nueva contraseña: ",error);
    return {error: `Error al confirmar código de verificación -> Error: ${error.response.status}`};
 }

}




