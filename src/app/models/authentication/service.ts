import { User, IUser } from '../user';
import config from '../../../environment/config';

const jwt = require('jsonwebtoken');

export class AuthenticationService {
    static async register(options: any) {
        try {
            // creating a new user and saving it. .create creates either a string or an array, this way is more specific.
            let user: IUser = new User(options.body);
            user = await user.save();

            // passing in a token
            const token = jwt.sign( { userId: user.id }, config.secret, { expiresIn: '1hr' } )

            // response from the service
            const response = {
                user,
                token,
                message: `Welcome ${user.username} !`
            }

            return response;
        } catch (e) {
            throw e;
        }
    }
}