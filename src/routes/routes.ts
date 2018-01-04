import * as express from 'express';

const Auth  = require('../app/controllers/auth');

const router = express.Router();

router.route('/register')
    .post(Auth.register);

// router.route('/login')
//     .post(auth.login);

module.exports = router;
