import React, { useState } from "react";
import styles from "./Input.module.css";

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string
}


interface IInputMaskProps extends IInputProps {
    mask: RegExp
}


const Input: React.FC<IInputProps> = (props) => {
    return (
        <input type="text" className={styles.input} {...props} />
    )
}


export default Input;