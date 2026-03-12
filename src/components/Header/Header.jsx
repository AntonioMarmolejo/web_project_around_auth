import React from "react";
import logo from "../../images/Vector-logo.svg";
export default function Header({ email, onlogout }) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo del Proyecto" />
            <div className="header__user">
                <p className="header__imail">{email}</p>
                <button className="header__logout" onClick={onlogout}>
                    Cerrar sesión
                </button>
            </div>
        </header>
    );
}
