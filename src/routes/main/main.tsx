import React from "react";
import { Button } from "../../UI/Button/Button";
import styles from "./main.module.css";
import imgGazelle from "../../images/gazelle.png";
import Section from "../../UI/Section/Section";

const SectionFirst: React.FC = () => {
    return (
        <Section>
            <div>
                <h1>EV PowerTank</h1>
                <p>Первый сервис вызова мобильных зарядных станций для электромобилей в Москве и Московской области</p>
                <Button>
                    Регистрация
                </Button>
            </div>
            <img src={imgGazelle} alt="gazelle" className={styles.img}/>
        </Section>
    );
}


export default function RouteMain() {
    return (
        <>
            <SectionFirst />
        </>
    )
}