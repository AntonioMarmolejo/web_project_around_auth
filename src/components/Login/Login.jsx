import React, { useState } from "react";
import { login } from "../../utils/auth";
import "../../blocks/login.css";
import logo from "../../assets/Vector-logo.svg"

function Login({ onResult }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await login(email, password);
            onResult(true, "¡Correcto! Sesión iniciada.");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            onResult(false, "¡Uy, algo salió mal. Por favor, intenta de nuevo.");
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    id="password"
                    type="password"
                    className="login_input"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="login_button">
                    Iniciar Sesión
                </button>
                <span className="login_spam">¿Aún no eres miembro? Regístrate aquí</span>
            </form>
        </div>
    );
};

export default Login;
