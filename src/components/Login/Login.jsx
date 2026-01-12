import React from "react";
import "../../blocks/login.css";

function Login() {
    return (
        <div>
            <div className="login">
                <h2 className="login_register">Regístrate</h2>
                <h2 className="login_sigin">Iniciar Sesión</h2>
                <form className="login_form">
                    <input
                        type="email"
                        className="login_input"
                        placeholder="Correo Electrónico"
                        required
                    />
                    <input
                        type="password"
                        className="login_input"
                        placeholder="Contraseña"
                        required
                    />
                    <button type="submit" className="login_button">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;