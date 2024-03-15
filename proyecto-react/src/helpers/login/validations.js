export const isValidPassword = (password) => {
    const regex = /^[a-zA-Z0-9 !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{1,20}$/;
    return regex.test(password);
};

export function validateLoginData(username, password) {
    if (username.trim() === "" && password.trim() === "") {
        return "Por favor, ingresa tu correo y contraseña";
    }
    if (username.trim() === "") {
        return "Tiene que ingresar su correo";
    }
    if (password.trim() === "") {
        return "La contraseña está vacía. Ingresa una contraseña.";
    }
    if (!isValidPassword(password)) {
        return "La contraseña debe ser alfanumérica y tener un máximo de 20 caracteres";
    }
    return null;
}

export function ValidateEmail(email){
    if (email.trim() === ""){
      return "Por favor, ingresa tu correo";
    }
}