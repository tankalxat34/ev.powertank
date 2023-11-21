import React from "react";
import styles from './Footer.module.css'
import { NavLinks } from "../Header/Header";
import { Link } from "react-router-dom";
import { FooterLinks1, FooterLinks2, FooterLinks3 } from "../../Links";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <p>© EV PowerTank Team</p>
                <p onClick={() => window.open('https://github.com/tankalxat34', 'blank')} style={{ cursor: "pointer" }}>© tankalxat34</p>
                <small>Work in progress</small>
            </div>
            <div>
                <h3>Карта сайта</h3>
                <ul>
                    {FooterLinks1.map((value: { title: string, path: string }, index: number) => {
                        return <li key={index}>
                            <Link to={value.path} key={index} className="a w">
                                {value.title}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>

            <div>
            <h3>Информация о проекте</h3>
                <ul>
                    {FooterLinks2.map((value: { title: string, path: string }, index: number) => {
                        return <li key={index}>
                            <Link to={value.path} key={index} className="a w">
                                {value.title}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>

            <div>
            <h3>Юридическая информация</h3>
                <ul>
                    {FooterLinks3.map((value: { title: string, path: string }, index: number) => {
                        return <li key={index}>
                            <Link to={value.path} key={index} className="a w">
                                {value.title}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;