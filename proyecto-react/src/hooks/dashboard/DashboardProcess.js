
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { UserInformation } from '../../services/dashboard/DashboardService';


export const obtenerIniciales = (nombreCompleto) => {
    const nombreArray = nombreCompleto.split(' ');
    return nombreArray.map(nombre => nombre.charAt(0)).join('');
  };
  
//Función para cerrar sesión
export function DashboardProcess(setShowLogoutPopup){

    const navigate = useNavigate();
    
    const handleLogout = () => {
        setShowLogoutPopup(false);
        navigate('/');
      };

      return handleLogout;
}

//Refrescar el nombre de usuario
export function useFectchUserData(accessToken, setLoading, setUserEmail, setUserIniciales) {
    useEffect(() => { 
      const fetchData = async () => {
        if (accessToken) {
          try {
            const userName = await UserInformation(accessToken);
            console.log("Hola: ",userName.status)
            setLoading(false); 
            setUserIniciales(prevIniciales => obtenerIniciales(userName) || prevIniciales);
            setUserEmail(userName); 
          } catch (error) { 
            console.error('Error al obtener el nombre de usuario:', error);
          }
        }
      }; 
 
      fetchData();
   }, [accessToken, setLoading, setUserEmail, setUserIniciales]);
  } 
 



  