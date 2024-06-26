import { LoginState } from '../../hooks/login/LoginState';
import { LoginProcess } from '../../hooks/login/LoginProcess';
import {LoginFormulario} from './LoginFormulario';
import {LoginPublicidad } from './LoginPublicidad';
import { ErrorModal } from '../modal/ErrorModal';
import { ValidateLoginData } from '../../helpers/login/validations';
import "../../styles/login/Login.css"

export function Login() {
    
    const {isModalOpen, setIsModalOpen,errorMessage,setErrorMessage,username, setUsername,
           password, setPassword,showPassword, setShowPassword,isLoading,setIsLoading} = LoginState();

    const handleLogin = LoginProcess(setIsModalOpen,setErrorMessage,setIsLoading);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const errorMessage = ValidateLoginData(username,password);

        if(errorMessage){
            setIsModalOpen(true);
            setErrorMessage(errorMessage);
        }else{
            handleLogin(username,password);
        }
    }
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <>
     <ErrorModal isOpen={isModalOpen} onClose={closeModal} message={errorMessage} />
      <section className="split-screen">
            <section className="left">
                <LoginPublicidad/>
            </section>
            <section className="right">
                <LoginFormulario
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                handleSubmit={handleSubmit}
                cargando={isLoading}
                /> 
            </section>
     </section>
    </>
  )
}

