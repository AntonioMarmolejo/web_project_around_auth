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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="auth__input"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="auth__error">{error}</p>}
                <button type="submit" className="auth__submit">Entrar</button>
            </form>
        </section>
    );
}
