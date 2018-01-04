import { IUser } from './interface';
import { User } from './model';
// import { UserSchema } from './schema';

// const jwt = require('jsonwebtoken');


export class UserService {
    static async create(options: any): Promise<IUser[]> {
        try {
            console.log('options.body', options.body);
            // // const user = new User(options.body);
            // console.log('user in UserService', user);
            // console.log('user.id in UserService', user.id);
            // we cannot return the user because of <IUser>
            const user = await User.create(options.body);
            // return Promise.all(User.create(options.body));
            return user;
        } catch (e) {
            throw e;
        }
    }
}