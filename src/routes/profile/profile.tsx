import React from "react";
import user from "../../store/user";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

const Profile: React.FC = observer(() => {
    const auth = getAuth();

    console.log(user);
    console.log({...user.userObject});
    console.log(user.auth);

    onAuthStateChanged(auth, (argUser: any) => {
        const uid = argUser.uid;
        console.log('onAuthStateChanged', {...argUser});
    })

    return <div>
        <h2>Профиль</h2>
        <p>Здесь представлена информация о вашем профиле</p>
        <p>Логин: {user.email}</p>
        <p>Дата регистрации: {user.userObject.metadata.creationTime}</p>
    </div>
})

export default Profile;