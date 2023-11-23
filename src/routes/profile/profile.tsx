import React, { useContext } from "react";
import { SectionText } from "../../UI/Section/Section";
import { PageLoader } from "../../components/LkState/LkState";
import { userFirebaseContext } from "../../App";
import { isEmpty } from "lodash";
import styles from './profile.module.css';
import { User } from "firebase/auth";
import { IDBUser } from "../../interfaces/IFirestoreDb";


const Profile: React.FC = () => {

    const {userData, dbData} = useContext(userFirebaseContext) as {userData: User, dbData: IDBUser};

    console.log(userData, dbData);

    if (isEmpty(userData) && isEmpty(dbData)) {
        return <SectionText className={styles.profileSection}>
            <PageLoader />
        </SectionText>
    }

    return <SectionText className={styles.profileSection}>
        <h2>{userData.displayName}</h2>
    </SectionText>
}

export default Profile;