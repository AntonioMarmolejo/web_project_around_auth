import React, { useState } from "react";
<<<<<<< HEAD
/* import { register } from "../../utils/auth"; */
import "../../blocks/register.css";
import logo from "../../assets/Vector-logo.svg"

function Register({ onResult }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            //await register(email, password); //Descomentar cuando ya tengamos la función de registro implementada
            onResult(true, "¡Correcto! Ya estás registrado.");
        } catch (error) {
            console.error("Error al registrarse:", error);
            // Si hay un error, puedes llamar a onResult con false
            onResult(false, "¡Uy, algo salio mal. Por favor, intenta de nuevo.");
        }
    }

    return (
        <div className="register">
            <header className="register_header">
                <img className="register_logo" src={logo} alt="Logo-register" />
                <h2 className="register_sigin">Iniciar Sesión</h2>
            </header>
            <h1 className="register_sigup">Registrate</h1>
            <form className="register_form" onSubmit={handleSubmit}>
                <input
                    id="email"
                    type="email"
                    className="register_input"
                    placeholder="Correo Electrónico"
=======
import { register } from "../../utils/auth";
import infoTooltip from "../infoTooltip/infoTooltip";

export default function Register({ onSucces }) {
    const [tooltipMessage, setTooltipMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await register(email, password);
            setTooltipMessage("Registro Exitoso");
            setIsError(false);
            setIsTooltipOpen(true);
            setEmail("");
            setPassword("");
            //Espera uno segundos y redirige (si se pasa onSuccess como prop)
            setTimeout(() => {
                setIsTooltipOpen(false);
                onSucces && onSucces();
            }, 2000);
        } catch (err) {
            setTooltipMessage(err);
            setIsError(true);
            setIsTooltipOpen(true);
        }
    };

    return (
        <div className="auth">
            <h2 className="auth__title">Registro</h2>
            <form className="auth__form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="auth__input"
>>>>>>> register/registrarse
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
<<<<<<< HEAD
                <input
                    id="password"
                    type="password"
                    className="register_input"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

export default Register;
=======

                <input
                    type="password"
                    placeholder="Contraseña"
                    className="auth__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                />

                <button type="submit" className="auth__button">
                    Regístrese
                </button>

            </form>

            {isTooltipOpen && (
                <infoTooltip
                    isOpen={isTooltipOpen}
                    onClose={() => setIsTooltipOpen(false)}
                    message={tooltipMessage}
                    isError={isError}
                />
            )}
        </div>
    );
}
>>>>>>> register/registrarse
