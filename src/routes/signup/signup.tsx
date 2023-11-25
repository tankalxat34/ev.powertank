import React, { useState, useRef, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, UserCredential, onAuthStateChanged, updateProfile, User } from "firebase/auth";
import styles from "./signup.module.css";
import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { SectionText } from "../../UI/Section/Section";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import ImgAvatare from "../../icons/default-avatare.png";
import { addDoc, collection } from "firebase/firestore";
import { PageLoader } from "../../components/LkState/LkState";
import { IDBUser } from "../../interfaces/IFirestoreDb";



const Signup: React.FC = () => {
    const navigate = useNavigate();

    const [creatingUser, setCreatingUser] = useState('not');

    // Персональные данные
    const [firstnameValue, setFirstnameValue] = useState('');
    const [lastnameValue, setLastnameValue] = useState('');
    const [fathernameValue, setFathernameValue] = useState('');
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    // Электрокар
    const [carmodelValue, setCarmodelValue] = useState('');
    const [carnumberValue, setCarnumberValue] = useState('');

    // Значения, которые должны быть заполнены
    const nesessaryData = [
        firstnameValue,
        lastnameValue,
        loginValue,
        passwordValue,
        carmodelValue,
        carnumberValue,
    ]

    /**
     * Вернуть `true`, если форма заполнена корректно
     * @returns boolean
     */
    const formValidation = () => {
        // проверка на заполненность обязательных полей
        for (let i = 0; i < nesessaryData.length; i++) {
            if (nesessaryData[i] !== carmodelValue && (!nesessaryData[i] || nesessaryData[i].includes(" "))) {
                return false
            }
        }

        // проверка на корректность введенного автомобильного номера
        const rgxp = /^[А-Я]{1}\d{3}[А-Я]{2}\d{2,3}$/gm;
        console.log(carnumberValue.match(rgxp))
        console.log(Array.isArray(carnumberValue.match(rgxp)))
        if (!Array.isArray(carnumberValue.match(rgxp))) return false;

        return true;
    }

    const handleSignup = (email: string, password: string) => {
        setCreatingUser('pending');
        createUserWithEmailAndPassword(auth, email, password)
            .then((resp: UserCredential) => {
                console.log(resp);
                return addDoc(collection(db, 'users'), {
                    uid: resp.user.uid,
                    email: resp.user.email,
                    pricetype: 0,
                    name: {
                        firstname: firstnameValue,
                        lastname: lastnameValue,
                        fathername: fathernameValue
                    },
                    cars: [
                        { model: carmodelValue, number: carnumberValue }
                    ],
                    invoices: [],
                    orders: []
                } as IDBUser);
            })
            .then((docRef) => {
                console.log(docRef);
                console.log(docRef.id);
                return updateProfile(auth.currentUser as User, {
                    displayName: `${lastnameValue} ${firstnameValue} ${fathernameValue}`,
                    photoURL: ImgAvatare,
                });
            })
            .then(() => {
                setCreatingUser('success');
            })
            .catch((error: Error) => {
                console.error(error);
                alert(error.message);
                setCreatingUser('not');
            });
    };



    if (creatingUser === 'pending') {
        return <PageLoader />
    } else if (creatingUser === 'success') {
        return <Navigate to={'/profile'}/>
    } else {
        return (
            <div>
                <SectionText style={{ minHeight: "90vh" }}>
                    <div className={styles.signupPage} id="signupForm">
                        <form action="">
                            <h2>Регистрация личного кабинета</h2>
                            <p>Для регистрации вам понадобится ввести почту, пароль, ФИО, модель электрокара и номер государственной регистрации автомобиля на территории РФ. Номер госрегистрации необходим для идентификации вашего автомобиля оператором сервиса.</p>
                            <h3>Персональные данные</h3>
                            <Input
                                type="text"
                                name="lastname"
                                placeholder="Фамилия*"
                                value={lastnameValue}
                                onChange={(e) => setLastnameValue(e.target.value)}
                            />
                            <Input
                                type="text"
                                name="firstname"
                                placeholder="Имя*"
                                value={firstnameValue}
                                onChange={(e) => setFirstnameValue(e.target.value)}
                            />
                            <Input
                                type="text"
                                name="fathername"
                                placeholder="Отчество (при наличии)"
                                value={fathernameValue}
                                onChange={(e) => setFathernameValue(e.target.value)}
                            />
                            <Input
                                type="login"
                                name="login"
                                placeholder="Электронная почта (логин)*"
                                value={loginValue}
                                onChange={(e) => setLoginValue(e.target.value)}
                            />
                            <Input
                                type="password"
                                name="password"
                                placeholder="Пароль*"
                                value={passwordValue}
                                onChange={(e) => setPasswordValue(e.target.value)}
                            />
                            <h3>Электрокар</h3>
                            <Input
                                type="text"
                                name="carmodel"
                                placeholder="Модель электрокара*"
                                value={carmodelValue}
                                onChange={(e) => setCarmodelValue(e.target.value)}
                            />
                            <Input
                                type="text"
                                name="carnumber"
                                placeholder="Номер (пример: Е123КХ77)*"
                                value={carnumberValue}
                                onChange={(e) => setCarnumberValue(e.target.value.toLocaleUpperCase().slice(0, 9))}
                            />
                            <Button
                                onClick={(event) => {
                                    event.preventDefault();
                                    if (formValidation()) handleSignup(loginValue, passwordValue);
                                    // console.log(formValidation())
                                    // if (formValidation()) console.log(formValidation());
                                    else alert("Заполнены не все обязательные поля либо форма заполнена некорректно!")
                                }}
                            >
                                Зарегистрироваться
                            </Button>
                        </form>
                        <div style={{
                            marginTop: "20px"
                        }}>
                            <p>Уже есть личный кабинет? Войдите в него его <Link to="/login">здесь</Link></p>
                        </div>
                    </div>
                </SectionText>


            </div>
        )
    }
}


export default Signup;