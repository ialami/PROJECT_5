import { NextFunction, Request, Response } from 'express';
// import * as Promise from 'bluebird';
// const jwt = Promise.promisifyAll(require('jsonwebtoken'));
// import config from '../environment/config';
const ApiError = require('../lib/apiError');
// import { User } from '../app/models/user/model';

exports.secureRoute = (req: Request, res: Response, next: NextFunction) => {
    const err = new ApiError.Unauthorized('Unauthorized.');
    if(!req.headers.authorization) return next(err);
    if(req.headers.authorization) {
        // const token = req.headers.authorization.replace('Bearer ', '');
        // const payload = jwt.verify(token, config.secret);
        // const user = User.findById(payload.userId);
        // if(!user) return err; 
        // req.user = user;
        return next();
      }

}