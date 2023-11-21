import React, { useState } from "react";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./login.module.css";
import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { SectionText } from "../../UI/Section/Section";
import { Link, useNavigate } from "react-router-dom";
import ImgGoogle from "../../icons/service-google.svg";
import { auth } from "../../firebase";



const Login: React.FC = () => {
    const navigate = useNavigate();

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleLogin = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((resp: UserCredential) => {
                console.log(resp);
                navigate('/profile');
            })
            .catch((error: Error) => {
                console.error(error);
                alert(error.message);
            });
    }


    return (
        <div>
            <SectionText style={{ minHeight: "90vh" }}>
                <div className={styles.loginPage} id="loginForm">
                    <form action="">
                        <h2>Вход в личный кабинет</h2>
                        <p>Понадобится логин и пароль или вход через альтернативную систему.</p>
                        <Input
                            type="login"
                            name="login"
                            placeholder="Введите логин"
                            value={loginValue}
                            onChange={(e) => setLoginValue(e.target.value)}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                        />
                        <Button
                            onClick={(event) => {
                                event.preventDefault();
                                handleLogin(loginValue, passwordValue);
                            }}
                        >
                            Войти
                        </Button>
                    </form>
                    <p>Нет личного кабинета? Создайте его <Link to="/signup">здесь</Link></p>
                    <div style={{ marginTop: "5%" }}>
                        <p>Другие способы входа</p>
                        <button
                            style={{
                                backgroundColor: "inherit"
                            }}
                        >
                            <img src={ImgGoogle} alt="logo" className={styles.iSize} />
                        </button>
                    </div>
                </div>
            </SectionText>


        </div>
    )
}


export default Login;