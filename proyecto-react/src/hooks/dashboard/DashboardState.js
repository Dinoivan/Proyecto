import { useState} from "react";


export function DashboardState(){

    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [loading,setLoading] = useState(true);
    const [userIniciales, setUserIniciales] = useState("");
    const [user,setUser] =  useState(null);
   
    

return {

    menuOpen, setMenuOpen,
    showLogoutPopup, setShowLogoutPopup,
    loading,setLoading,
    userEmail,setUserEmail,
    userIniciales,setUserIniciales,
    user,setUser
};

}

