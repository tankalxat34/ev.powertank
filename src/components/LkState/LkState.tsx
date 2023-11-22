import { onAuthStateChanged } from "firebase/auth";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { auth } from "../../firebase";
import React from "react";
import { TailSpin } from "react-loader-spinner";


interface ILkState {
    children: ReactNode[]
}

/**
 * Отображает `children1`, пока не загрузятся данные аккаунта. В противном случае отображает `children0`
 * @param children0 Children, отображающийся после успешной загрузки данных об аккаунте 
 * @param children1 Children, отображающийся, когда пользователь не авторизован или идет загрузка данных авторизации
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
        </>
    }
    if (state === 'rejected') {
        return <>
            {secondChild}
        </>
    }
}

export default LkState;