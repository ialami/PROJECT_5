import { NextFunction, Request, Response } from 'express';

// import { log } from 'util';
import { AuthenticationService } from '../models/authentication';
// import { UserService } from '../models/user';
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
            const response = await AuthenticationService.register(req);
            return res.status(200).json(response);
        } catch (e) {
            return next(e);
        }
    }

};
