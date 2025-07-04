// sub schema for address

import { Model } from "mongoose";

export interface IAddress{
    street: string;
    city: string;
    
    zipCode: number;
}


export interface IUser{
    firstName: string;
    lastName: string;
    age:number;
    password: string;
    email: string;
    role: 'user' | 'admin'; // 'user' or 'admin'
    address: IAddress;
}


// ----its for Custom Instance Method----
export interface UserInstanceMethod{
    hasPassword(password:string): string;
}



// ----its for Custom Static Method----
export interface UserStaticMethod extends Model<IUser> {
    hasPassword(password:string): string;
}