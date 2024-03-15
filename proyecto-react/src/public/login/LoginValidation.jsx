import {LoginValidationState} from "../../hooks/login/LoginValidationState"
import { ValidateEmailOnPlatform ,CodeVerification} from "../../hooks/login/LoginValidationProcess.js"
import { LoginPublicidad} from "./LoginPublicidad"
import { LoginFormulario } from "./LoginFormulario"
import "../../styles/login/LoginValidation.css"
import { Verificacion } from "../modal/ErrorModal"
import { useNavigate } from "react-router-dom"

export function LoginValidation() {

    const navigate = useNavigate();
    
    const{currentStep,setCurrentStep,
          email,setEmail,
          verificationCode,setVerificationCode,
          newPassword,setNewPassword,
          showPassword,setShowPassword,
          modalData,setModalData,
          showModal,setShowModal,
          codigoVerificacion,setCodigoVericacion,
          errorMessageEmail,setErrorMessageEmail,
          codigoVerificacionError,setCodigoVerificacionError,
          cargando,setCargando
    } = LoginValidationState();

    const handleValidation = ValidateEmailOnPlatform(email,
        setCurrentStep,setModalData,
        setShowModal,setErrorMessageEmail,
        setCargando);


    const handleCloseModal = () => {
        setShowModal(false);
        setErrorMessageEmail(false);
    }

    const handleCloseModalCodigoVerificacion = () => {
        setCodigoVericacion(false)
        navigate("/");  
    }

    const handleCloseModalCodigoVerificacionError = () => {
        setCodigoVerificacionError(false);
    }

    const handleCodeVerification = CodeVerification(verificationCode,
        newPassword,setModalData,
        setCodigoVericacion,setCodigoVerificacionError,
        setCargando);

    return(
        <>
        <section className="split-screen">

            <section className="left">
                <LoginPublicidad/>
            </section>

            <section className="right">

                {currentStep ===1 && (
                 <LoginFormulario
                        handleSubmit={handleValidation}
                        username={email}
                        setUsername={setEmail}
                        setShowPassword={setShowPassword} 
                        usernameLabel="Correo electrónico"
                        sectionclassName="input-container name"
                        nombre="fcorreo"
                        usernamePlaceholder="Analista 01"
                        inputType="email"
                        showArrobaIcon={true}
                        hideparrafo={true}
                        hidePassword={true}
                        validarclassName="accede"
                        linkclassName="contraseña-link"
                        buttonclassName="containe"
                        buttonclassNamed="signup-btn custom-btn"
                        linkTo="/"
                        linkText="Acceder a tu cuenta"
                        buttonText="Validar"
                        cargando={cargando}
                 />

                )}
                {currentStep === 2 && (

                    <LoginFormulario
                        handleSubmit={handleCodeVerification}
                        usernameLabel="Verificar código"
                        sectionclassName="input-container codigo"
                        nombre="fcodigo"
                        usernamePlaceholder="875077"
                        inputType="text"
                        ptexto = "Código de verificación"
                        inpclassName="codigo"
                        username={verificationCode}
                        setUsername={setVerificationCode}
                        labelpassword="Contraseña nueva"
                        password={newPassword}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        setPassword={setNewPassword}
                        showArrobaIcon={false}
                        validarclassName="acceder"
                        linkclassName="contr-link"
                        buttonclassName="container"
                        buttonclassNamed="signup-btnn custom-btnn"
                        linkTo="/"
                        linkText="Acceder a tu cuenta"
                        buttonText="Cambiar"
                        cargando={cargando}
                    />
                )}

                
            </section>
    </section>
            {showModal && (
                <Verificacion isOpen={true} onClose={handleCloseModal} data={modalData}/>
            )}
  
       {codigoVerificacion && (
                <Verificacion isOpen={true} onClose={handleCloseModalCodigoVerificacion} data={modalData}/>
            )}

            
       {codigoVerificacionError && (
                <Verificacion isOpen={true} onClose={handleCloseModalCodigoVerificacionError} data={modalData}/>
            )}


        {errorMessageEmail && (
                <Verificacion isOpen={true} onClose={handleCloseModal} data={modalData}/>
            )}

        </>
    )

}
