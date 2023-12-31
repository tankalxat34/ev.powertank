import React, { useContext } from "react";
import { SectionText } from "../../UI/Section/Section";
import { PageLoader } from "../../components/LkState/LkState";
import { modalContext, userFirebaseContext } from "../../App";
import { isEmpty } from "lodash";
import styles from './profile.module.css';
import { User, UserMetadata } from "firebase/auth";
import { IDBCar, IDBUser } from "../../interfaces/IFirestoreDb";
import { Button, ButtonSignOut } from "../../UI/Button/Button";
import ImgDefaultUser from "../../icons/default-avatare.png";
import { Link } from "react-router-dom";
import { toRusTime } from "../../utils/Helper";
import RuFlag from '../../icons/russia-flag-icon.svg';
import { IModal, IModalContext } from "../../UI/Modal/Modal";


// фикс нужен, так как Firestore не определяет типы этих свойств
// и возникает ошибка о несуществовании свйства
export interface IUserFix extends UserMetadata {
    createdAt: string
}

const priceTypes: string[] = ['Базовый', 'Улучшенный', 'Премиум']

const Profile: React.FC = () => {

    const Modal = useContext(modalContext) as IModalContext;

    const { userData, dbData } = useContext(userFirebaseContext) as { userData: User, dbData: IDBUser };
    const userDataMetadata = userData.metadata as IUserFix;

    if (isEmpty(userData) || isEmpty(dbData)) {
        return <SectionText className={styles.profileSectionText}>
            <PageLoader />
        </SectionText>
    }

    return <>
        <SectionText className={styles.profileSectionText}>
            <h2 className={styles.needHidden}>Личный кабинет</h2>

            <div className={styles.avatareSection}>
                <div>
                    <img className={styles.avatare} src={ImgDefaultUser} alt="" />
                </div>
                <div>
                    <h3>{`${dbData.name.lastname} ${dbData.name.firstname} ${dbData.name.fathername}`}</h3>
                </div>
            </div>

            <div className={styles.btnQuickActions}>
                <Link to="/neworder">
                    Новый заказ
                </Link>
                <Link to="/price">
                    Подписка
                </Link>
                <Link to="/price">
                    Платежные методы
                </Link>
                <Link to="/">
                    О сервисе
                </Link>
            </div>

            <div className={styles.pSection}>
                <h3>Основное</h3>
                <table className={styles.tableUserInfo}>
                    <tbody>
                        <tr>
                            <td>
                                Электронная почта
                            </td>
                            <td>
                                {dbData.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Дата регистрации
                            </td>
                            <td>
                                {toRusTime(Number(userDataMetadata && userDataMetadata.createdAt))}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Номер телефона
                            </td>
                            <td>
                                {userData.providerData[0].phoneNumber || '-'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Уникальный идентификатор
                            </td>
                            <td>
                                <code
                                    style={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => navigator.clipboard && navigator.clipboard.writeText(e.currentTarget.innerText as string)}
                                >{userData.uid}</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.pSection}>
                <h3>Электрокары ({dbData.cars.length})</h3>
                <div className={styles.carsList}>
                    {dbData.cars.map((car: IDBCar, index: number) => {
                        return <div key={index}>
                            <h4>{car.model}</h4>
                            <p className={styles.carNumber}>{car.number}&nbsp;<img src={RuFlag} alt="" width={'20px'} /></p>
                        </div>
                    })}
                </div>
                <Button 
                    className={`btn outline ${styles.w100}`}
                    onClick={() => {
                        if (!dbData.pricetype) {
                            Modal.setNewChildrenElement(<p>Используя базовый тариф вы не можете добавить более одного электрокара в сервис</p>)
                            Modal.setActive(!Modal.active)
                        }
                    }}
                >
                    Добавить электрокар
                </Button>
            </div>

            <div className={styles.pSection}>
                <h3>Подписка</h3>
                <table className={styles.tableUserInfo}>
                    <tbody>
                        <tr>
                            <td>
                                Тип подписки
                            </td>
                            <td>
                                {priceTypes[dbData.pricetype]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className={styles.btnMainActions}>
                <ButtonSignOut className={`btn negative ${styles.btnMainAction}`} />
            </div>

        </SectionText>
    </>



}

export default Profile;