import { IUser } from './interface';
import { User } from './model';
// import { UserSchema } from './schema';

// const jwt = require('jsonwebtoken');


export class UserService {
    static async create(options: any): Promise<IUser[]> {
        try {
            const user = await User.create(options.body);
            return user;
        } catch (e) {
            throw e;
        }
    }
}