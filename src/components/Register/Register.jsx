import React, { useState } from "react";
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

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