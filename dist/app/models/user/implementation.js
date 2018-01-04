"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImplUser {
    constructor(fullName, username, email, password, passwordConfirmation, _id) {
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.password = passwordConfirmation;
        this._id = _id;
    }
}
exports.ImplUser = ImplUser;
