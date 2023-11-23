import React, { useContext } from "react";
import { SectionText } from "../../UI/Section/Section";
import { PageLoader } from "../../components/LkState/LkState";
import { userFirebaseContext } from "../../App";
import { isEmpty } from "lodash";


const Profile: React.FC = () => {

    const {userData, dbData} = useContext(userFirebaseContext) as any;

    console.log(userData, dbData);

    if (isEmpty(userData) && isEmpty(dbData)) {
        return <SectionText style={{ minHeight: '90vh', marginTop: '10vh' }}>
            <PageLoader />
        </SectionText>
    }
    return <SectionText style={{minHeight: '90vh'}}>
        <h2>{userData.displayName}</h2>
    </SectionText>
}

export default Profile;