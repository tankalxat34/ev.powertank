import React from "react";
import { Button } from "../../UI/Button/Button";
import styles from "./Header.module.css";
import logo from "../../images/logo192.png"
import { BrowserRouter, Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img src={logo} alt="" />
                    <h3>EV PowerTank</h3>
                </Link>
            </div>
            <div className={styles.keyboard}>
                <Link to="/">Главная</Link>
                <Link to="/sub">О подписке</Link>
                <Link to="/faq">FAQ</Link>
            </div>
            <div>
                <Button>
                    Войти
                </Button>
            </div>
        </header>
    );
}


export default Header;