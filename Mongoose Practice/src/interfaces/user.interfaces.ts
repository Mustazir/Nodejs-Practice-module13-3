// sub schema for address

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

export interface UserInstanceMethod{
    hasPassword(password:string): string;
}