import React from "react";
import "./Button.css";
import { IButton } from "../../interfaces/IButton";


export const Button: React.FC<IButton> = (props) => {
    return (
        <button className={`btn ${props.type || 'primary'}`}>
            {props.children}
        </button>
    )
}