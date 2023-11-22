import React, { useContext, useEffect, useState } from "react";
import { SectionText } from "../../UI/Section/Section";
import { ButtonSignOut } from "../../UI/Button/Button";
import { PageLoader } from "../../components/LkState/LkState";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import ServiceDB from "../../utils/FirebaseDB";
import { DocumentData, QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { dbContext } from "../../App";
import { User } from "firebase/auth";


const Profile: React.FC = () => {

    const userData = useContext(dbContext) as User;

    if (!Object.keys(userData).length) {
        return <SectionText style={{ minHeight: '90vh', marginTop: '10vh' }}>
            <PageLoader />
        </SectionText>
    }

    console.log(userData);


    return <div>
        <SectionText style={{ minHeight: '90vh', marginTop: '10vh' }}>
            <h2>{userData.displayName}</h2>
            <ButtonSignOut style={{ maxWidth: '30px!important' }} />
        </SectionText>
    </div>
}

export default Profile;