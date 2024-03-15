import {loginState} from '../../hooks/loginState';
import {loginProcess} from '../../hooks/loginProcess';
import {LoginFormulario} from './LoginFormulario';
import {LoginPublicidad } from './LoginPublicidad';
import {ErrorModal} from '../modal/errorModal';
import "../../styles/login/Login.css"

export function Login() {
    
    const {isModalOpen, setIsModalOpen,errorMessage,setErrorMessage,username, setUsername,
           password, setPassword,showPassword, setShowPassword} = loginState();

    const handleLogin = loginProcess(setIsModalOpen,setErrorMessage);

    const handleSubmit = async (event) =>{
        event.preventDefault();

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
                /> 
            </section>
     </section>
    </>
  )
}

