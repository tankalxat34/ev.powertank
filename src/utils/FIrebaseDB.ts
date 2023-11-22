import { DocumentData, QuerySnapshot, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';

class ServiceDB {
    static async getUser(uid: string): Promise<QuerySnapshot<DocumentData, DocumentData>>
    {
        return await getDocs(query(collection(db, 'users'), where('uid', '==', uid)));
    }
}

export default ServiceDB;