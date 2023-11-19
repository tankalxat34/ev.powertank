import React, { useState } from "react";
import { Button } from "../../UI/Button/Button";
import logo from "../../images/logo192.png"
import { BrowserRouter, Link } from "react-router-dom";
import "./Header.css";
import iconBurderMenu from "../../icons/dark-burger.svg"
import Modal from "../../UI/Modal/Modal";
import Links from "../../Links"


const NavLinks: React.FC = () => {
    return (
        <>
            {Links.map((value: { title: string, path: string }) => {
                return <Link to={value.path}>
                    {value.title}
                </Link>
            })}
        </>
    )
}


const Header: React.FC = () => {
    const [modalActions, setActiveModalActions] = useState(false);

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="logo" className="logoImg" />
                <h3>EV PowerTank</h3>
            </Link>

            <div className="actions">
                <NavLinks />
            </div>

            <div className="linkAuth">
                <Link to="/auth" >
                    Вход
                </Link>
            </div>

            <div className="burgerActions">
                <button className="btn i" onClick={() => setActiveModalActions(true)}>
                    <img src={iconBurderMenu} alt="" width='40px' />
                </button>
            </div>
            <Modal active={modalActions} setActive={setActiveModalActions}>
                <h3>Меню</h3>
                <div style={{display: "grid"}}>
                    <NavLinks />
                    <hr />
                    <button className="btn primary" style={{margin: "20px 0 0 0"}}>
                        Войти
                    </button>
                    <button className="btn secondary" style={{margin: "20px 0 0 0"}}>
                        Регистрация
                    </button>
                </div>

            </Modal>

        </header>

    );
}


export { NavLinks };
export default Header;