/*
Create an interface on which we extend type Document of mongoose
*/
import { Document } from 'mongoose';

export interface IUser extends IUserRaw, Document {}

export interface IUserRaw {
    fullName: string;
    username: string;
    email: string;
    password: string;
    passwordConfirmation: any;
    _id: any;
    // id: any; //error

    // validatePassword(password: string): any;
    // hashPassword(): any;
}