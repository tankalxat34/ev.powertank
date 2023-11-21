import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, UserCredential, onAuthStateChanged } from "firebase/auth";
import styles from "./signup.module.css";
import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { SectionText } from "../../UI/Section/Section";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";


const Signup: React.FC = () => {
    const navigate = useNavigate();

    // Персональные данные
    const [firstnameValue, setFirstnameValue] = useState('');
    const [lastnameValue, setLastnameValue] = useState('');
    const [fathernameValue, setFathernameValue] = useState('');
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    
    // Электрокар
    const [carmodelValue, setCarmodelValue] = useState('');
    const [carnumberValue, setCarnumberValue] = useState('');
    

    const handleSignup = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((resp: UserCredential) => {
                console.log(resp);
                navigate('/profile');
            })
            .then(() => {
                onAuthStateChanged(auth, (argUser: any) => {
                    const uid = argUser.uid;
                    console.log('onAuthStateChanged', {...argUser});
                })
            })
            .catch((error: Error) => {
                console.error(error);
                alert(error.message);
            });
    }


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
                            name="firstname"
                            placeholder="Имя"
                            value={firstnameValue}
                            onChange={(e) => setFirstnameValue(e.target.value)}
                        />
                        <Input
                            type="text"
                            name="lastname"
                            placeholder="Фамилия"
                            value={lastnameValue}
                            onChange={(e) => setLastnameValue(e.target.value)}
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
                            placeholder="Электронная почта (логин)"
                            value={loginValue}
                            onChange={(e) => setLoginValue(e.target.value)}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                        />
                        <h3>Электрокар</h3>
                        <Input
                            type="text"
                            name="carmodel"
                            placeholder="Модель электрокара"
                            value={carmodelValue}
                            onChange={(e) => setCarmodelValue(e.target.value)}
                        />
                        <Input
                            type="text"
                            name="carnumber"
                            placeholder="Номер (пример: Е123КХ77)"
                            value={carnumberValue}
                            onChange={(e) => setCarnumberValue(e.target.value)}
                        />
                        <Button
                            onClick={(event) => {
                                event.preventDefault();
                                return handleSignup(loginValue, passwordValue);
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


export default Signup;