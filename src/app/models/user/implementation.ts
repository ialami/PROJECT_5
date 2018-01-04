import { IUserRaw } from './interface';
// import { Validator } from '../validator';

export class ImplUser implements IUserRaw {
    public fullName: string;
    public username: string;
    public email: string;
    public password: string;
    public passwordConfirmation: any;
    public _id: any;
    // public validatePassword(password: string): any;
    // public hashPassword(): any;

    constructor(
        fullName: string,
        username: string,
        email: string,
        password: string,
        passwordConfirmation: any,
        _id: any,
    ) {
        this.fullName = fullName;
        this.username = username;
        this.email    = email;
        this.password = password;
        this.password = passwordConfirmation;
        this._id      = _id;
   }
}
