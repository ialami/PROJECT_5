import { NextFunction, Request, Response } from 'express';

// import { IUser } from '../models/user';
// import { User } from '../models/user/schema';
// import { log } from 'util';
import { AuthenticationService } from '../models/authentication';
// import { UserService } from '../models/user';
// import { log } from 'util';
// const middlewareResponse = require('../../lib/utilsMiddleware')
// .messageAssign;

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
            const response = await AuthenticationService.register(req);
            return res.status(200).json(response);
            // middlewareResponse(req, 200, response);
            // return next();
        } catch (e) {
            return next(e);
        }
    }

};
