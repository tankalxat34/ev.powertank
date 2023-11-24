import React from "react";
import { SectionText } from "../../UI/Section/Section";
import styles from "./neworder.module.css";

const Neworder: React.FC = () => {
    return <>
        <SectionText className={styles.profileSectionText}>

            <h2>Оформление заказа</h2>

            <div className={styles.stepSection}>
                <div className={styles.stepHeader}><p className={styles.stepNumber}>1</p> Выберите электрокар</div>
            </div>

            <div className={styles.stepSection}>
                <div className={styles.stepHeader}><p className={styles.stepNumber}>2</p> Выберите местоположение</div>
            </div>

            <div className={styles.stepSection}>
                <div className={styles.stepHeader}><p className={styles.stepNumber}>3</p> Проверьте учетные данные</div>
            </div>

        </SectionText>
    </>
}

export default Neworder;