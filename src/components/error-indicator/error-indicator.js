import React from "react";

import './error-indicator.scss';
import icon from './pngegg.png';

const ErrorIndicator = ({message }) => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">ОШИБКА!</span>
            {/*<span>что-то пошло не так ...</span>*/}
            <span>{message ?? 'что-то пошло не так ...'}</span>
            {/*<span>(сообщите об этом.)</span>*/}
        </div>
    );
};

export default ErrorIndicator;