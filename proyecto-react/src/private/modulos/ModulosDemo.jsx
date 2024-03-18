import { DashboardState } from "../../hooks/dashboard/DashboardState";
import { DashboardProcess } from "../../hooks/dashboard/DashboardProcess";
import Imagenes from "../../assets/imagenes/logo.png";
import Figura from "../../assets/imagenes/Figura.png";
import { useFectchUserData } from "../../hooks/dashboard/DashboardProcess";
import { useAuth } from "../../contexts/Authutils";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SideMenu } from "../components/SideMenu";
import { Outlet } from "react-router-dom";  
import "../../styles/dashboard/Dashboard.css";

export function ModulosDemo(){
    
    const {  menuOpen, 
        setMenuOpen,
        showLogoutPopup, 
        setShowLogoutPopup,
        userEmail,
        setUserEmail,
        loading,
        setLoading,
        userIniciales,
        setUserIniciales
     } = DashboardState();
     
     const { accessToken } = useAuth();
     const handleLogout  = DashboardProcess(setShowLogoutPopup);
     useFectchUserData(accessToken,setLoading,setUserEmail,setUserIniciales);
     
     return(
     <>
     
     <Header 
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen} 
        Imagenes={Imagenes}
        Figura={Figura}
        loading={loading}
        userIniciales={userIniciales} 
        userEmail={userEmail}
        showLogoutPopup={showLogoutPopup} 
        handleLogout={handleLogout} 
        setShowLogoutPopup={setShowLogoutPopup}
     />

     <SideMenu 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
     />

     <section>
        <Outlet/>
     </section>
        
    <Footer/>

   </>
);
}