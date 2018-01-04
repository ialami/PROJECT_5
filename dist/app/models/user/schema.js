"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
exports.UserSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        required: 'Please provide a full name',
        trim: true
    },
    username: {
        type: String,
        required: 'Please provide a username',
        trim: true
    },
    email: {
        type: String,
        required: 'Please provide a valid email',
        trim: true
    },
    password: {
        type: String,
        required: 'Please provide a password',
        trim: true
    }
});
exports.UserSchema.set('toObject', {
    getters: true,
    setters: true,
    virtuals: true
});
exports.UserSchema.set('toJSON', {
    getters: true,
    setters: true,
    virtuals: true,
    transform(doc, ret) {
        delete ret.__v;
        return ret;
    }
});
exports.UserSchema
    .virtual('passwordConfirmation')
    .set(setPasswordConfirmation);
exports.UserSchema.pre('save', hashPassword);
exports.UserSchema.methods.validatePassword = validatePassword;
function validatePassword(password) {
    return bcrypt.compareSync(password, this.password);
}
function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
}
function hashPassword(next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    }
    next();
}
