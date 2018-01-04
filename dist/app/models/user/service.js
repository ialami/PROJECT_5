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
const model_1 = require("./model");
class UserService {
    static create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('options.body', options.body);
                const user = new model_1.User(options.body);
                console.log('user in UserService', user);
                console.log('user.id in UserService', user.id);
                return model_1.User.create(options.body);
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.UserService = UserService;
