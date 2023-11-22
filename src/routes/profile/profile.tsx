import React from "react";
import { signOut } from "firebase/auth";
import { SectionText } from "../../UI/Section/Section";
import { auth } from "../../firebase";
import { ButtonSignOut } from "../../UI/Button/Button";
import { TailSpin } from "react-loader-spinner";


const Profile: React.FC = () => {

    return <div>
        <SectionText>
            <h2>Профиль</h2>
            <h3>{auth.currentUser?.email}</h3>
            <TailSpin
                height="50"
                width="50"
                color="#15A2CE"
                ariaLabel="tail-spin-loading"
                radius="0.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <ButtonSignOut style={{ width: '30px' }} />
        </SectionText>
    </div>
}

export default Profile;