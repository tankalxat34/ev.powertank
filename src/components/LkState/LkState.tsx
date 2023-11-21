import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../../firebase";
import React from "react";


interface ILkState {
    children: React.ReactNode | ReactNode[]
}

/**
 * Отображает `children1`, пока не загрузятся данные аккаунта. В противном случае отображает `children0`
 * @param children0 Children, отображающийся после успешной загрузки данных об аккаунте 
 * @param children1 Children, отображающийся, когда пользователь не авторизован или идет загрузка данных авторизации
 * @returns 
 */
const LkState: React.FC<ILkState> = ({ children }) => {

    const [firstChild, secondChild] = React.Children.toArray(children);

    const [state, setState] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            console.log(data);
            if (data) {
                setState(true);
            } else {
                setState(false)
            }
        })
    }, [])

    return state
        ? <>
            {firstChild}
        </>
        : <>
            {secondChild}
        </>
}

export default LkState;