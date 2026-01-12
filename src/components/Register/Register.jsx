import React, { useState } from "react";
/* import { register } from "../../utils/auth"; */
import "../../blocks/register.css";
import logo from "../../assets/Vector-logo.svg"

function register() {
    return (
        <div className="register">
            <header className="register_header">
                <img className="register_logo" src={logo} alt="Logo-register" />
                <h2 className="register_sigin">Iniciar Sesión</h2>
            </header>
            <h1 className="register_sigup">Registrate</h1>
            <form className="register_form">
                <input
                    id="email"
                    type="email"
                    className="register_input"
                    placeholder="Correo Electrónico"
                    required
                />
                <input
                    id="password"
                    type="password"
                    className="register_input"
                    placeholder="Contraseña"
                    required
                />
                <button type="submit" className="register_button">
                    Registrarse
                </button>
                <span className="register_spam">¿Ya eres miembro? inicia sesión aquí</span>
            </form>
        </div>
    );
};

export default register;