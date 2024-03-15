import { loginUser } from "../services/login/loginServices";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/Authutils";

export function loginProcess(setIsModalOpen,setErrorMessage){

    const navigate = useNavigate();

    const {setAccessToken} =  useAuth();

    const handleLogin = async (username,password) => {
        
            const response = await loginUser(username, password);

            if(response && response.token){
                setAccessToken(response.token);
            }
            
            if (response.error) {
                setIsModalOpen(true);
                setErrorMessage(response.error);
            }
            else{
                navigate('/dashboard');
            }
         
    };

    return handleLogin;
}

