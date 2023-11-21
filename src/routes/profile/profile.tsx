import React from "react";
import { signOut } from "firebase/auth";
import { SectionText } from "../../UI/Section/Section";
import { auth } from "../../firebase";
import { Button } from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";


const Profile: React.FC = () => {
    console.log(auth.currentUser);

    const navigate = useNavigate();

    return <div>
        <SectionText>
            <h2>Профиль</h2>
            <h3>{auth.currentUser?.email}</h3>
            <Button
                viewtype="negative"
                onClick={() => {
                    signOut(auth)
                        .then(() => {
                            navigate('/');
                        })
                        .catch((error: Error) => {
                            alert(error.message);
                        })
                }}
            >
                Выход
            </Button>
        </SectionText>
    </div>
}

export default Profile;