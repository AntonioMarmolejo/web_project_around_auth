<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from "react";
import { login } from "../../utils/auth";
import { setToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await login(email, password);
            setToken(data.token); // Guardamos el token
            onLogin(); // Notificamos al App que el usuario está logueado
            navigate("/"); // Redirigimos al home
        } catch (err) {
            setError("Correo o contraseña incorrectos");
        }
    };

    return (
        <section className="auth">
            <h2 className="auth__title">Iniciar sesión</h2>
            <form className="auth__form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="auth__input"
                    placeholder="Correo electrónico"
=======
import React, { useState } from "react";
/* import { register } from "../../utils/auth"; */
import "../../blocks/login.css";
import logo from "../../assets/Vector-logo.svg"

function Login({ onResult }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            //await login(email, password); //Descomentar cuando ya tengamos la función de inicio de sesión implementada
            onResult(true, "¡Correcto! Sesión iniciada.");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            onResult(false, "¡Uy, algo salio mal. Por favor, intenta de nuevo.");
        }
    }

    return (
        <div className="login">
            <header className="login_header">
                <img className="login_logo" src={logo} alt="Logo-register" />
                <h2 className="login_sigin">Regístrate</h2>
            </header>
            <h1 className="login_sigup">Inicia Sesión</h1>
            <form className="login_form" onSubmit={handleSubmit}>
                <input
                    id="email"
                    type="email"
                    className="login_input"
                    placeholder="Correo Electrónico"
>>>>>>> portectedroute/proteger
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
<<<<<<< HEAD
                    type="password"
                    className="auth__input"
=======
                    id="password"
                    type="password"
                    className="login_input"
>>>>>>> portectedroute/proteger
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
<<<<<<< HEAD
                {error && <p className="auth__error">{error}</p>}
                <button type="submit" className="auth__submit">Entrar</button>
            </form>
        </section>
    );
}
>>>>>>> login/inicar
=======
                <button type="submit" className="login_button">
                    Iniciar Sesión
                </button>
                <span className="login_spam">¿Aún no eres miembro? Regístrate aquí</span>
            </form>
        </div>
    );
};

export default Login;
>>>>>>> portectedroute/proteger
