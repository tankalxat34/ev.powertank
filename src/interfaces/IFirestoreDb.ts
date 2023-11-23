// типизация элементов базы данных Firestore

export interface IDBCar extends Object { model: string, number: string }

export interface IDBPersonName extends Object {
    fathername: string
    firstname: string
    lastname: string
}

export interface IDBUserInvoice extends Object {
    date: Date
    sum: number
}

export interface IDBUserOrder extends IDBUserInvoice {
    address: string
}

export interface IDBUser extends Object {
    uid: string
    pricetype: number
    name: IDBPersonName
    email: string
    cars: IDBCar[]
    invoices: IDBUserInvoice[]
    orders: IDBUserOrder[]
}