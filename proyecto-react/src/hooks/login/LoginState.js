import { useState} from "react";

export function LoginState(){

const [isModalOpen, setIsModalOpen] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [isLoading,setIsLoading] = useState(false);

return {

    isModalOpen, setIsModalOpen,
    errorMessage, setErrorMessage,
    username, setUsername,
    password, setPassword,
    showPassword, setShowPassword,
    isLoading,setIsLoading
};

}
