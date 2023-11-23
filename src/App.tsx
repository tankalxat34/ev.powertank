import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import { RouterProvider } from 'react-router-dom';
import { privateProter, router } from './router';
import { auth, db } from './firebase';
import { User, onAuthStateChanged } from 'firebase/auth';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { IDBUser } from './interfaces/IFirestoreDb';


export const userFirebaseContext = createContext({});

function App() {
    // генирируем контекст - данные пользователя из авторизации и из БД
    // таким образом мы делаем всего один запрос на получение данных
    // и не нагружаем приложение лишними запросами из отдельных
    // компонентов
    const [state, setState] = useState({} as User);
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            setState(data as User);
        })
    }, [])

    const [dbData, setDbData] = useState({} as IDBUser);
    const [stateDataReceived, setStateDataReceived] = useState(false);

    useEffect(() => {
        async function fetchDbData() {
            const data = await getDocs(query(collection(db, 'users'), where('uid', '==', state.uid)))
            setDbData(data.docs.map((value) => value.data())[0] as IDBUser)
            setStateDataReceived(true);
        }

        if (state?.uid && !stateDataReceived) {
            fetchDbData();
        } else {
            setStateDataReceived(false);
        }
    }, [state]);


    return (
        <React.StrictMode>
            <userFirebaseContext.Provider value={{
                userData: state,
                dbData: dbData
            }}>
                <RouterProvider router={!!state ? privateProter : router} />
            </userFirebaseContext.Provider>
        </React.StrictMode>
    );
}

export default observer(App);
