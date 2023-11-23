export interface IDBUser extends Object {
    uid: string
    pricetype: number
    name: {
        fathername: string
        firstname: string
        lastname: string
    }
    email: string
    cars: { model: string, number: string }[]
}