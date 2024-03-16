import { DashboardState } from "../../hooks/dashboard/DashboardState";
import { DashboardProcess } from "../../hooks/dashboard/DashboardProcess";
import Imagenes from "../../assets/imagenes/logo.png";
import Figura from "../../assets/imagenes/Figura.png";
import { useFectchUserData } from "../../hooks/dashboard/DashboardProcess";
import { useAuth } from "../../contexts/Authutils";
import { Header } from "../components/Header";
import { WelcomeSection } from "./WelcomeSection";
import { MainContent } from "./MainContent";
import { Footer } from "../components/Footer";
import "../../styles/dashboard/Dashboard.css";

export function Dashboard(){

    const {  menuOpen, setMenuOpen,
        showLogoutPopup, setShowLogoutPopup,userEmail,setUserEmail,
        loading,setLoading,userIniciales,setUserIniciales
     } = DashboardState();

   const { accessToken } = useAuth();

   const handleLogout  = DashboardProcess(setShowLogoutPopup);

   useFectchUserData(accessToken,setLoading,setUserEmail,setUserIniciales);

   console.log("Inicial: ",userIniciales);
   
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

        <WelcomeSection
        menuOpen={menuOpen}
        loading={loading}
        userEmail={userEmail}
        />

   
    <div className={menuOpen ? "menu-overlay--abierto": "menu-overlay"}></div>

    <div className={menuOpen ? "main--abierto": "main"}>
        <MainContent/>
    </div>

    <Footer/>

   </>
);
}