import React from "react";
import { Button } from "../../UI/Button/Button";
import styles from "./main.module.css";
import imgGazelle from "../../images/gazelle.png";
import Section, { SectionText } from "../../UI/Section/Section";
import Badge from "../../UI/Badge/Badge";

const SectionFirst: React.FC = () => {
    return (
        <>
            <Section>
                <div>
                    <h1>EV PowerTank</h1>
                    <p>Первый сервис вызова мобильных зарядных станций для электромобилей в Москве и Московской области</p>
                    <div style={{display: "flex" }}>
                        <Button style={{ margin: "20px 5px" }}>
                            Регистрация
                        </Button>
                        <Button style={{ margin: "20px 5px" }} className="btn outline">
                            Вход
                        </Button>
                    </div>
                </div>
                <img src={imgGazelle} alt="gazelle" className={styles.img} />
            </Section>

            <SectionText>
                <div>
                    <h2>О проекте</h2>
                    <div style={{display: "flex", overflowX: "scroll"}}>
                        <Badge value="EnergyNet"/>
                        <Badge value="Энергоэффективность"/>
                        <Badge value="Доставка энергии"/>
                    </div>
                    <p>Мы занимаемся разработкой сервиса по созданию мобильных зарядных станций для электрокаров. Используя нашу услугу вы можете вызвать зарядную станцию прямо к своему электрокару. Оператор станции начнет зарядную сессию, а после ее окончания выставит счет.</p>
                    <ul>
                        <li><b>Рынок НТИ:</b> EnergyNet</li>
                        <li><b>Технологическое направление:</b> Энергоэффективность, Энергосбережение</li>
                    </ul>
                </div>
            </SectionText>

            <SectionText>
                <div>
                    <h2>Ключевые показатели</h2>
                    <div className={styles.keyAdvantages}>
                        <div>
                            <p className={styles.keyNumber}>29</p>
                            <p>станций на базе Газель NEXT</p>
                        </div>
                        <div>
                            <p className={styles.keyNumber}>300</p>
                            <p>кВт/ч в одной зарядной станции</p>
                        </div>
                    </div>
                    <div className={styles.keyAdvantages}>
                        <div>
                            <p className={styles.keyNumber}>26</p>
                            <p>тысяч аккумуляторов</p>
                        </div>
                        <div>
                            <p className={styles.keyNumber}>6</p>
                            <p>аккумуляторных сборок</p>
                        </div>
                    </div>
                    <div className={styles.keyAdvantages}>
                        <div>
                            <p className={styles.keyNumber}>6</p>
                            <p>самых популярных видов зарядки</p>
                        </div>
                    </div>
                </div>
            </SectionText>

            <SectionText>
                <div>
                    <h2>Как мы работаем?</h2>
                    <ol>
                        <li>Вы уточняете геолокацию Вашего электрокара;</li>
                        <li>После оформления заказа на зарядную сессиию по геолокации вашего электрокара приезжает наш оператор;</li>
                        <li>Как только оканчивается зарядная сессия - вы получаете счет на оплату услуги;</li>
                    </ol>
                </div>
            </SectionText>
        </>
    );
}


export default function RouteMain() {
    return (
        <>
            <SectionFirst />
        </>
    )
}