"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
module.exports = class Auth {
    static register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('req.body', req.body);
                const user = yield user_1.UserService.create(req);
                console.log('user in controller', user);
                return null;
            }
            catch (e) {
                return null;
            }
        });
    }
};
