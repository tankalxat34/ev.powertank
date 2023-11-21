import React from "react";
import styles from "./Input.module.css";

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string
} 


const Input: React.FC<IInputProps> = (props) => {
    return (
        <input type="text" className={styles.input} {...props}/>
    )
}


export default Input;