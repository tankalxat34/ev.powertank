import React, { useEffect, useState } from "react";
import { SectionText } from "../../UI/Section/Section";
import { ButtonSignOut } from "../../UI/Button/Button";
import LkState, { UserProperty } from "../../components/LkState/LkState";
import ImgAvatare from "../../icons/default-avatare.png";
import styles from "./profile.module.css";
import Tooltip from "../../UI/Tooltip/Tooltip";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";


const Profile: React.FC = () => {

    const userData = useFirebaseAuth();
    console.log(userData)

    return <div>
        <SectionText style={{ minHeight: '90vh', marginTop: '10vh' }}>
            <h2><UserProperty pathToKey="displayName" /></h2>
            {/* <h2>{userData?.displayName}</h2> */}

            <hr />

            <div className={styles.mainUserInfo}>
                <div className={styles.avatare}>
                    <img src={ImgAvatare} alt="avatare" />
                </div>
                <div>
                    {/* <div>
                        <h3><UserProperty pathToKey="displayName" /></h3>
                    </div> */}
                    <UserProperty pathToKey="email" />
                    <div>
                        <code style={{cursor: "pointer"}} onClick={(e) => navigator.clipboard.writeText(e.currentTarget.innerText)}><UserProperty pathToKey="uid" /></code>
                    </div>
                    <div>
                        <div><b>Номер телефона: </b>
                            <UserProperty pathToKey="providerData[0].phoneNumber" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <span><b>Тип авторизации: </b></span>
                <UserProperty pathToKey="providerData[0].providerId" />
            </div>
            <div>
                <span><b>Время создания личного кабинета: </b></span>

                <UserProperty pathToKey="metadata.creationTime" />
            </div>
            <ButtonSignOut style={{ maxWidth: '30px!important' }} />
        </SectionText>
    </div>
}

export default Profile;