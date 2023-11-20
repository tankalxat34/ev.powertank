import React from "react";
import Badge from "../../UI/Badge/Badge";
import styles from "./sub.module.css"
import { SectionText } from "../../UI/Section/Section";
import { Button } from "../../UI/Button/Button";
import imgPlus from "../../icons/plus.svg"
import Tooltip from "../../UI/Tooltip/Tooltip";


const Abilities = [
    { text: "Бесплатный выезд оператора", }
]


const Sub: React.FC = () => {
    return (
        <SectionText style={{ minHeight: "100vh" }}>
            <div>
                <h2>Подписка</h2>
                <p>Вы можете приобрести специальную подписку на наш сервис. Ниже представлены тарифы и их преимущества.</p>
            </div>
            <div className={styles.subParentSection}>
                <div className={styles.subSection + " " + styles.base}>
                    <h3>Базовый</h3>
                    <p className={styles.subPrice}>0 ₽/мес.</p>
                    <ul className={styles.ul}>
                        <li>Пользование сервисом</li>
                        <li>Постоянная поддержка</li>
                    </ul>
                    <Button disabled>
                        Доступно по умолчанию
                    </Button>
                </div>
                <div className={styles.subSection + " " + styles.plus}>
                    <h3>Улучшенный</h3>
                    <p className={styles.subPrice}>500 ₽/мес.</p>
                    <ul className={styles.ul}>
                        <li>Бесплатный выезд оператора</li>
                        <li>Пользование сервисом</li>
                        <li>Постоянная поддержка</li>
                        <li>Возможность добавить несколько электрокаров</li>
                    </ul>
                    <Button>
                        Купить
                    </Button>
                </div>
                <div className={styles.subSection + " " + styles.prem}>
                    <h3>Премиум</h3>
                    <p className={styles.subPrice}>1000 ₽/мес.</p>
                    <ul className={styles.ul}>
                        <li>Бесплатный выезд оператора</li>
                        <li>Пользование сервисом</li>
                        <li>Постоянная поддержка</li>
                        <li>Ускоренная зарядка</li>
                        <li>Приоритет в очереди</li>
                        <li>Возможность добавить несколько электрокаров</li>
                    </ul>
                    <Button>
                        Купить
                    </Button>
                </div>
            </div>
            <div>
                <p>Приобретая подписку в нашем сервисе вы помогаете развиваться нашему проекту. С покупкой любой подписки выезд оператора становится для вас <b>бесплатным</b> на все время действия подписки.</p>
            </div>
        </SectionText>
    )
}


export default Sub;