<<<<<<< HEAD
import React from "react";
import Popup from "../Main/components/Popup/Popup";
import successIcon from "../../images/success.svg";
import errorIcon from "../../images/error.svg";

export default function InfoTooltip({ isOpen, onClose, message, isError }) {
    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            <div className="info-tooltip">
                <img
                    src={isError ? errorIcon : successIcon}
                    alt={isError ? "Error" : "Éxito"}
                    className="info-tooltip__icon"
                />
                <p className="info-tooltip__message">{message}</p>
            </div>
        </Popup>
=======
import "../../blocks/infoTooltip.css";

import React, { useEffect } from "react";
import iconClose from "../../images/Close-Icon.svg";

export default function InfoTooltip({ isSuccess, message, onClose }) {
    return (
        <>
            <div className="infotooltip__overlay" onClick={onClose}></div >
            <div className="infotooltip">
                <div className="infotooltip__content">
                    <div className="infotooltip__close-button" onClick={onClose}>
                        <img src={iconClose} alt="ícono de cerrar ventana" />
                    </div>
                    <div className={`infotooltip__circle ${isSuccess ? "infotooltip__circle-success" : "infotooltip__circle-error"}`} >
                        {isSuccess ? "✔️" : "❌"}
                    </div>
                    <h2 className="infotool__title">{message}</h2>
                </div>
            </div >
        </>
>>>>>>> portectedroute/proteger
    );
}