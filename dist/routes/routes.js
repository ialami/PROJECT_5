"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Auth = require('../app/controllers/auth');
const router = express.Router();
router.route('/register')
    .post(Auth.register);
module.exports = router;
