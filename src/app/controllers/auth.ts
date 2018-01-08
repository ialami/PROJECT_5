import { NextFunction, Request, Response } from 'express';

import { AuthenticationService } from '../models/authentication';

module.exports = class Auth {
  
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

      /**
        * POST /login
        * Unprotected
        */

    public static async login(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const response = await AuthenticationService.login(req);
            return res.status(response.status).json(response.body);
        } catch(e) {
            return next(e);
        }
    }
    
};
