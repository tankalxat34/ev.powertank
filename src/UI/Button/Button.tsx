import React, { useState } from "react";
import "./Button.css";
import Modal from "../Modal/Modal";


export const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
    return (
        <>
            <button className={`btn ${props.type || 'primary'}`} {...props}>
                {props.children}
            </button>
        </>
    )
}