// import { IUser, User } from '../user';

import { NextFunction, Request, Response } from 'express';

// import { UserSchema } from './schema';

export class AuthenticationService {
    static async register(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> {
        try {
            return new Promise((resolve, reject) => {
                console.log('req in AuthService', req);
                // const token = jwt.sign( { userId: req.id }, secret, {expiresIn: '1hr'} );

                return resolve(req);
                // reject('error bla');
            });
        } catch (e) {
            throw e;
        }
    }
}