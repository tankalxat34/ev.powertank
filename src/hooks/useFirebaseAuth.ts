import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

/**
 * Хук для получения данных с Firebase
 * @returns Объект залогиненного пользователя из Firebase
 */
function useFirebaseAuth(): User | undefined {
    const [state, setState] = useState('pending');
    const [userData, setUserData] = useState<User>({} as User);

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if (data) {
                setUserData({ ...data } as User);
                setState('resolved');
            } else {
                setState('rejected');
            }
        })
    }, []);

    if (state === 'resolved' && Object.keys(userData).length) {
        return userData;
    }
}

export default useFirebaseAuth;