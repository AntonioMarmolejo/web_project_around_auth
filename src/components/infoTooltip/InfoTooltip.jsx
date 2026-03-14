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
    );
}