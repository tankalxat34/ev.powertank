import React, { useState } from "react";
import "./Button.css";
import Modal from "../Modal/Modal";


export const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
    const [_modalErrorAction, setModalErrorAction] = useState(false);
    return (
        <>
            <button className={`btn ${props.type || 'primary'}`} {...props} onClick={props.onClick ? props.onClick : () => setModalErrorAction(true)}>
                {props.children}
            </button>
            <Modal active={_modalErrorAction} setActive={setModalErrorAction} style={{textAlign: "left!important"}}>
                <h3>Ошибка</h3>
                Это действие пока недоступно!
            </Modal>
        </>
    )
}