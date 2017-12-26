import { Document } from 'mongoose';

export interface IUser extends IUserRaw, Document {}

export interface IUserRaw {
    fullName: string;
    username: string;
    email: string;
    password: string;
}