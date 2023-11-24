import React, { useContext, useEffect, useState } from "react";
import { SectionText } from "../../UI/Section/Section";
import styles from "./neworder.module.css";
import Select from "../../UI/Select/Select";
import { User } from "firebase/auth";
import { userFirebaseContext } from "../../App";
import { IDBCar, IDBUser } from "../../interfaces/IFirestoreDb";
import { IUserFix } from "../profile/profile";
import { isEmpty } from "lodash";
import { Loader, PageLoader } from "../../components/LkState/LkState";
import { useGeolocated } from "react-geolocated";
import Badge from "../../UI/Badge/Badge";
import { Button } from "../../UI/Button/Button";
import { toRusTime } from "../../utils/Helper";


const GeolocationConfig: Object = {
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    watchLocationPermissionChange: true,
}




const GeolocationComponent: React.FC = () => {
    const {
        coords,
        getPosition,
        isGeolocationAvailable,
        isGeolocationEnabled,
        positionError,
    } = useGeolocated(GeolocationConfig);

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <Badge value="Геолокация не включена" type="negative" />
    ) : coords ? (
        <div>
            <Button className={`btn outline ${styles.btnMakeOrder}`} onClick={getPosition} viewtype="outline">
                Обновить
            </Button>
            <table>
                <tbody>
                    <tr>
                        {/* <td>
                            Адрес
                        </td>
                        <td>
                            <p>{coords.latitude}</p>
                        </td> */}
                    </tr>
                    <tr>
                        <td>latitude</td>
                        <td>{coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{coords.longitude}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    ) : (
        // <div>Getting the location data&hellip; </div>
        <div><Loader /></div>
    );
};



const Neworder: React.FC = () => {

    const { userData, dbData } = useContext(userFirebaseContext) as { userData: User, dbData: IDBUser };
    const userDataMetadata = userData.metadata as IUserFix;
    // const { selectedCar, setSelectedCar } = useState('') as {selectedCar: string, setSelectedCar: React.Dispatch<React.SetStateAction<string>>};
    const [selectedCar, setSelectedCar] = useState('');

    if (isEmpty(userData) || isEmpty(dbData)) {
        return <SectionText className={styles.profileSectionText}>
            <PageLoader />
        </SectionText>
    }

    return <>
        <SectionText className={styles.profileSectionText}>

            <h2>Оформление заказа</h2>

            <div className={styles.stepSection}>
                <div className={styles.stepHeader}><p className={styles.stepNumber}>1</p> Выберите электрокар</div>
                <p>Выберите электрокар, который необходимо зарядить</p>
                <Select options={dbData.cars.map((value: IDBCar, index: number) => {
                    return { name: `${value.model} (${value.number})` }
                })}
                    onChange={(e) => setSelectedCar(`${e.target.value}`)}
                />
            </div>

            <div className={styles.stepSection}>
                <div className={styles.stepHeader}><p className={styles.stepNumber}>2</p> Выберите местоположение</div>
                <p>Определите местонахождение вашего электрокара. Обратите внимание, на данный момент указание адреса доступно только по вашей текущей геолокации. Елси проект получит дополнительную поддержку - будет реализована специальная карта с возможностью выбора конкретной точки.</p>
                <GeolocationComponent />
            </div>

            <div className={styles.stepSection}>
                <div className={styles.stepHeader}><p className={styles.stepNumber}>3</p> Проверьте учетные данные</div>
                <table className={styles.tableUserInfo}>
                    <tbody>
                        <tr>
                            <td>
                                ФИО
                            </td>
                            <td>
                                {dbData.name.lastname} {dbData.name.firstname} {dbData.name.fathername}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Электронная почта
                            </td>
                            <td>
                                {dbData.email}
                            </td>
                        </tr>
                        {/* <tr>
                            <td>
                                Дата регистрации
                            </td>
                            <td>
                                {toRusTime(Number(userDataMetadata && userDataMetadata.createdAt))}
                            </td>
                        </tr> */}
                        <tr>
                            <td>
                                Дата оформления заказа
                            </td>
                            <td>
                                {toRusTime(Date.now())}
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
                                Выбранный электрокар
                            </td>
                            <td>
                                <span>{selectedCar}</span>
                            </td>
                        </tr>
                        <tr style={{
                            fontSize: '1.4em'
                        }}>
                            <td>
                                <b>К оплате</b>
                            </td>
                            <td>
                                <b>{590.95} ₽</b>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Button className={`btn primary ${styles.btnMakeOrder}`}>
                    Оформить заказ
                </Button>
            </div>

        </SectionText>
    </>
}

export default Neworder;