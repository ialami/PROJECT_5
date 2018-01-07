import { IUserRaw } from './interface';
// import { Validator } from '../validator';

export class ImplUser implements IUserRaw {
    // User information
    public fullName: string;
    public username: string;
    // User credentials
    public email: string;
    public password: string;
    public passwordConfirmation: any;
    public _id: any;

    // Functions
    public validatePassword: any;
    // public hashPassword(): any;

    constructor(
        fullName: string,
        username: string,
        email: string,
        password: string,
        passwordConfirmation: any,
        _id: any,
        validatePassword: any
    ) {
        this.fullName = fullName;
        this.username = username;
        this.email    = email;
        this.password = password;
        this.password = passwordConfirmation;
        this._id      = _id;
        this.validatePassword = validatePassword;
   }
}
