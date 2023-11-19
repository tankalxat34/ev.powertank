import React from "react";
import styles from './Footer.module.css'
import { NavLinks } from "../Header/Header";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>© EV PowerTank Team</p>
            <p onClick={() => window.open('https://github.com/tankalxat34', 'blank')} style={{cursor: "pointer"}}>© tankalxat34</p>
            <small>Work in progress</small>
        </footer>
    )
}

export default Footer;