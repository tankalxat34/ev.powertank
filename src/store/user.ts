import { UserCredential } from "firebase/auth";
import { makeAutoObservable } from "mobx";

class User {
    email = '';
    password = '';
    userObject: UserCredential | Object | any = {};
    auth = null;

    constructor() {
        makeAutoObservable(this);
    }

    setUserObject(resp: Object) {
        this.userObject = {...resp};
    }

    setEmail(resp: string) {
        this.email = resp; 
    }

    setAuth(resp: any) {
        this.auth = resp;
    }

    /**
     * Вернуть `true` если пользователь вошел в аккаунт
     * @returns boolean
     */
    isAuth() {
        console.log({...this.userObject})
        return !!Object.keys({...this.userObject}).length;
    }
}


export default new User;