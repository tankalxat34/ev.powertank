import { User, onAuthStateChanged } from "firebase/auth";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { auth } from "../../firebase";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import { get } from 'lodash';


interface ILkState {
    children: ReactNode[]
}

interface IUserProperty {
    pathToKey: string
}


export const Loader: React.FC = () => {
    return <>
        <div style={{
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <TailSpin
                height="50"
                width="50"
                color="#15A2CE"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    </>
}

export const PageLoader: React.FC = () => {
    return <>
        <div style={{
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            minHeight: '90vh'
        }}>
            <TailSpin
                height="70vh"
                width="70vw"
                color="#15A2CE"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{
                    width: "20vw"
                }}
                wrapperClass=""
                visible={true}
            />
        </div>
    </>
}


/**
 * Возвращает значение из объекта пользователя в виде компонента
 * @param param0 Путь до ключа в виде строки
 * @returns any Компонент со значением или словом "Не задано"
 */
export const UserProperty: React.FC<IUserProperty> = ({ pathToKey }): ReactElement<any, any> | null | any => {
    const [state, setState] = useState('pending');
    const [userData, setUserData] = useState<User>({} as User);

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if (data) {
                setUserData({ ...data } as User);
                setState('resolved');
            } else {
                setState('rejected')
            }
        })
    }, [])


    if (state === 'resolved' && Object.keys(userData).length) {
        const resultString = get(userData, pathToKey, "null");
        return <>
            {resultString
                ? resultString
                : <p style={{ color: 'grey' }}>Не задано</p>
            }
        </>
    } else {
        return <Loader />
    }
}


/**
 * Отображает `children1`, пока не загрузятся данные аккаунта. В противном случае отображает `children0`. Во время загрузки отображается спиннер загрузки
 * @param children0 Children, отображающийся после успешной загрузки данных об аккаунте 
 * @param children1 Children, отображающийся, когда пользователь не авторизован
 * @returns 
 */
const LkState: React.FC<ILkState> = ({ children }): ReactElement<any, any> | null | any => {

    const [firstChild, secondChild] = React.Children.toArray(children);

    const [state, setState] = useState('pending');

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if (data) {
                setState('resolved');
            } else {
                setState('rejected')
            }
        })
    }, [])

    if (state === "resolved") {
        return <>
            {firstChild}
        </>
    }
    if (state === "pending") {
        return <>
            <Loader />
        </>
    }
    if (state === 'rejected') {
        return <>
            {secondChild}
        </>
    }
}

export default LkState;