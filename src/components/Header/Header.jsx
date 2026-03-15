import React from "react";
import logo from "../../images/Vector-logo.svg";
export default function Header({ email, onLogout, loggedIn }) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo del Proyecto" />
            <div className="header__user">
                {loggedIn ? (
                    <div className="header__user">
                        <p className="header__email">{email}</p>
                        <button className="header__logout" onClick={onLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <nav className="header__nav">
                        <a href="/signup" className="header__link">Regístrate</a>
                        <a href="/signin" className="header__link">Inicia sesión</a>
                    </nav>
                )}
            </div>
        </header>
    );
}
