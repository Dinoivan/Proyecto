import { UserVerification,Forgotpassword,ConfirmVerificationCode} from "../../services/login/LoginValidationService"
import { ValidateEmail } from "../../helpers/login/validations";

export function ValidateEmailOnPlatform(email,setCurrentStep,setModalData,setShowModal,setErrorMessageEmail,setCargando){

    const handleValidation = async (e) => {
        e.preventDefault();

        try{
            setCargando(true);
            const errorMessage_ = ValidateEmail(email);
            if(errorMessage_){
                setErrorMessageEmail(true);
                setModalData({
                    title: 'Error',
                    message: errorMessage_,
                    icon: 'times'
                });
                return;
            }
            
            const response = await UserVerification(email);
            console.log("Logica",response);
            if(response){
                console.log("Entro en esta condicional")
                await Forgotpassword(email);
                setShowModal(true);
                setModalData({
                    title: 'Exito',
                    message: 'Se ha enviado un codigo de verificación a su correo electrónico',
                    icon: 'check'
                })
                setCurrentStep(2);
            }else{
                throw new Error("Correo no registrado o inactivo.");
            }

        }catch(error){
            if(error.message === "Correo no registrado o inactivo."){
                setShowModal(true);
                setModalData({
                    title: 'Error',
                    message: `El correo electrónico proporcionado no esta registrado en nuestro sistema`,
                    icon: 'times'
                })
            }else{
                setShowModal(true);
                setModalData({
                    title: 'Error',
                    message: 'Ocurrio un error. Por favor, intentalo de nuevo',
                    icon: 'times'
                })
            }

        }finally{
            setCargando(false);
        }
        
    };

  
    return handleValidation;

}

export function CodeVerification(verificationCode,newPassword,setModalData,setCodigoVericacion,setCodigoVerificacionError,setCargando,setErrorMessage,errorMessage){


    const handleCodeVerification = async (e) => {
        e.preventDefault();

        try{
            setCargando(true);

        if(verificationCode && !newPassword.trim()){
            setCodigoVerificacionError(true);
            setModalData({
                title: 'Alerta',
                message: 'Por favor, ingresa la nueva contraseña',
                icon: 'alert'
            })
            return; 
        }

        if(newPassword && !verificationCode.trim()){
            setCodigoVerificacionError(true);
            setModalData({
                title: 'Alerta',
                message: 'Por favor, ingresa el código de verificación',
                icon: 'alert'
            })
            return; 
        }
        
         if (!verificationCode.trim() || !newPassword.trim()) {
            setCodigoVerificacionError(true);
            setModalData({
                title: 'Alerta',
                message: 'Por favor, ingresa el codigo de verificación y la nueva contraseña',
                icon: 'alert'
            })
            return; 
        }
        
        const estado =  await ConfirmVerificationCode(verificationCode,newPassword);

        console.log(estado);

        if(estado === 200){
            setCodigoVericacion(true);
            setModalData({
                title: 'Exito',
                message: 'Contraseña cambiado exitosamente accede a su cuenta',
                icon: 'check'
            })
        }else{
            setCodigoVerificacionError(true);
            setErrorMessage(estado.error)
                 setModalData({
                    title: 'Error',
                     message: errorMessage,
                 icon: 'times'
                })
             }     

        }catch(error){
            setCodigoVerificacionError(true);
            setModalData({
                title: 'Error',
                message: 'Error el servidor esta fallando',
                icon: 'times'
            })

        }finally{
            setCargando(false);
        }
    };

    return handleCodeVerification;

}

