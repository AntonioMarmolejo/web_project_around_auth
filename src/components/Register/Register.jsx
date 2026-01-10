import React, { useState } from "react";
/* import { register } from "../../utils/auth"; */
import "../../blocks/register.css";

function register(

) {
    return (
        <div className="register">
            <h1 className="register_sigup">Registrate</h1>
            <h2 className="register_sigin">Iniciar Sesión</h2>
            <form className="register_form">
                <input
                    type="email"
                    className="register_input"
                    placeholder="Correo Electrónico"
                    required
                />
                <input
                    type="password"
                    className="register_input"
                    placeholder="Contraseña"
                    required
                />
                <button type="submit" className="register_button">
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default register;