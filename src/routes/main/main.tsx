import React from "react";
import { Button } from "../../UI/Button/Button";
import styles from "./main.module.css";
import imgGazelle from "../../images/gazelle.png";
import Section, { SectionText } from "../../UI/Section/Section";
import Badge, { BadgesDiv } from "../../UI/Badge/Badge";
import IconScrollDown from "../../icons/dark-scrollDown.svg";

const SectionFirst: React.FC = () => {
    return (
        <>
            <Section>
                <img src={imgGazelle} alt="gazelle" className={styles.img} />
                <div>
                    <h1>EV PowerTank</h1>
                    <p>Первый сервис вызова мобильных зарядных станций для электромобилей в Москве и Московской области. Заказ на официальном сайте или в мобильном приложении.</p>
                    <div className={styles.btns}>
                        <Button>
                            Заказать зарядную сессию
                        </Button>
                        <Button className="btn outline">
                            Войти в личный кабинет
                        </Button>
                    </div>
                </div>
            </Section>

            <SectionText>
                <div>
                    <h2>О проекте</h2>
                    <p>Мы занимаемся разработкой сервиса по созданию мобильных зарядных станций для электрокаров. Используя нашу услугу вы можете вызвать зарядную станцию прямо к своему электрокару. Оператор станции начнет зарядную сессию, а после ее окончания выставит счет.</p>
                    <ul>
                        <li><b>Рынок НТИ:</b> EnergyNet</li>
                        <li><b>Технологическое направление:</b> Энергоэффективность, Энергосбережение</li>
                    </ul>
                    <BadgesDiv>
                        <Badge value="EnergyNet"/>
                        <Badge value="AutoNet"/>
                        <Badge value="EcoNet"/>
                        <Badge value="Зеленая энергетика" type="positive"/>
                        <Badge value="Энергоэффективность" type="positive"/>
                        <Badge value="Доставка энергии" type="positive"/>
                        <Badge value="Москва" type="negative"/>
                        <Badge value="Московская область" type="negative"/>
                    </BadgesDiv>
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
                        <li>Сделать заказ можно на этом сайте или в официальном мобильном приложении;</li>
                    </ol>
                </div>
            </SectionText>

            <SectionText>
                <div>
                    <h2>Сотрудничество</h2>
                    <p>Мы рассматриваем предложения о сотрудничестве и партнерстве. Если вам интересен наш проект и вы готовы предложить сотрудничество - напишите нам на <a href="mailto:kozlovskiy-dm@ranepa.ru">электронную почту</a>.</p>
                    {/* <ul>
                        <li><b>Основатель</b>: Козловский Дмитрий Максимович, <a href="mailto:kozlovskiy-dm@ranepa.ru">kozlovskiy-dm@ranepa.ru</a></li>
                        <li><b>Технический лид проекта</b>: Подстречный Александр Владимирович, <a href="mailto:tankalxat34@gmail.com">tankalxat34@gmail.com</a></li>
                        <li><b>Аналитик</b>: Опалихин Святослав Сергеевич, <a href="mailto:opalihin.svyatoslav@yandex.ru">opalihin.svyatoslav@yandex.ru</a></li>
                        <li><b>Креативный директор</b>: Пьянзин Тимофей Алексеевич, <a href="mailto:tp741242@gmail.com">tp741242@gmail.com</a></li>
                    </ul> */}
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