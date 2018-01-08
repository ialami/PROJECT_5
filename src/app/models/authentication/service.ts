import { User, IUser } from '../user';
import config from '../../../environment/config';

const jwt = require('jsonwebtoken');

export class AuthenticationService {

    public static async register(options: any) {
        try {
            // Creating a new user and saving it. .create creates either a string or an array, this way is more specific.
            let user: IUser = new User(options.body);
console.log('USer', user);
            user = await user.save();

            // Create a token
            const token: string = jwt.sign( { userId: user.id }, config.secret, { expiresIn: '1hr' } )

            // Response from the service
            const response = {
                user,
                token,
                message: `Welcome ${user.username} !`
            }

            return response;
        } catch (e) {
            console.log('ERROR', e)
            throw e;
        }
    }

    public static async login(options: any) {
        try {
            // Find user by email
            let user = await User.findOne({ email: options.body.email });

            // Error response
            const errorResponse = {
                body: {
                    message: 'Incorrect credentials'
                },
                status: 404
            }

            // Handle errors
            if (!user || !user.validatePassword(options.body.password)) return errorResponse;

            // Create a token
            const token: string = jwt.sign( { userId: user.id }, config.secret, { expiresIn: '1hr' } )

            // Response
            const response = {
                body: {
                    user,
                    token,
                    message: `Welcome back ${user.username} !`
                },
                status: 200
            }

            return response;
        } catch(e) {
            throw e;
        }
    }

}