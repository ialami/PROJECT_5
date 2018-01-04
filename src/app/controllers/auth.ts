import { NextFunction, Request, Response } from 'express';

// import { IUser } from '../models/user';
// import { User } from '../models/user/schema';
// import { log } from 'util';
// import { AuthenticationService } from '../models/authentication';
import { UserService } from '../models/user';
// import { log } from 'util';

module.exports = class Auth {
    /**
     * POST /login
     * Unprotected
     */

     /**
      * POST /register
      * Unprotected
      */

    public static async register(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            console.log('req.body', req.body);
            console.log('hey before');
            const user = await UserService.create(req);
            console.log('user in controller', user);
            console.log('hey after');
            // const response = await AuthenticationService.register(req, res, next);
            // console.log('response in controller', response);
            // res.status(201).json(response);
            return res.json(user);
        } catch (e) {
            return null;
        }
    }

};
