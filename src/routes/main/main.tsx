import React from "react";
import { Button } from "../../UI/Button/Button";
import styles from "./main.module.css";
import imgGazelle from "../../images/gazelle.png";

const SectionFirst: React.FC = () => {
    return (
        <div id="section-1" className={styles.section1}>
            <div>
                <h1>EV PowerTank</h1>
                <p>Первый сервис вызова мобильных зарядных станций для электромобилей в Москве</p>
                <Button>
                    Регистрация
                </Button>
            </div>
            <img src={imgGazelle} alt="gazelle"/>
        </div>
    );
}


export default function RouteMain()  {
    return (
        <>
            <SectionFirst />
        </>
    )
}