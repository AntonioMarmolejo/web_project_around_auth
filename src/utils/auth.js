import { setToken, getToken, removeToken } from './token'

//Simulación en base de datos en localStorage (solo para desarrollo)
const USERS_KEY = 'users_db';

//Obtener la base de datos de usuarios
const getUsers = () => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
};

//Guardar la base de datos de usuarios
const saveUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

//Registrar un nuevo usuario
export const register = (email, password) => {
    return new Promise((resolve, reject) => {
        const users = getUsers();

        const userExists = users.some((user) => user.email === email);

        if (userExists) {
            reject("El usuario ya existe");
        } else {
            const newUser = { email, password };
            users.push(newUser);
            saveUsers(users);
            resolve("Usuario registrado con exitosamente");
        }
    });
}

// Iniciar sesión
export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        const users = getUsers();

        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            // Simular un token
            const fakeToken = `${email}-token-${Date.now()}`;
            setToken(fakeToken);
            resolve({ token: fakeToken, user: { email } });
        } else {
            reject("Credenciales incorrectas");
        }
    });
};

// Verificar si hay sesión activa
export const isLoggedIn = () => {
    const token = getToken();
    return Boolean(token);
};

// Cerrar sesión
export const logout = () => {
    removeToken();
}