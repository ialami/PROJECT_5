import { Schema } from 'mongoose';
// import * as mongoose from 'mongoose-fill';
// const mongoose = require('mongoose-fill');
import * as bcrypt from 'bcrypt';
import * as validator from 'validator';

export const UserSchema: Schema = new Schema(
    {
        fullName: {
            type: String,
            required: 'Please provide a full name',
            trim: true
          },
          username: {
            type: String,
            required: 'Please provide a username',
            // unique: 'Sorry, this username has already been taken.',
            trim: true
          },
          email: {
            type: String,
            required: 'Please provide a valid email',
            // unique: 'Sorry, this email has already been taken.',
            trim: true
          },
          password: {
            type: String,
            required: 'Please provide a password',
            trim: true
          }
    }
);

UserSchema.set('toObject', {
    getters: true,
    setters: true,
    virtuals: true
  });

UserSchema.set('toJSON', {
    getters: true,
    setters: true,
    virtuals: true,
    transform(doc, ret) {
      delete ret.__v;
      delete ret._id;
      delete ret.password;
      delete ret.passwordConfirmation;
      return ret;
    }
  });

/*

// uncomment when Startup schema created
UserSchema
  .virtual('startups', {
    ref: 'Startup',
    localField: '_id',
    foreignField: 'createdBy'
  });

// uncomment when Request schema created
UserSchema
  .virtual('sentRequests', {
    ref: 'Request',
    localField: '_id',
    foreignField: 'sender'
  });

// uncomment when Request schema created
UserSchema
  .virtual('receivedRequests', {
    ref: 'Request',
    localField: '_id',
    foreignField: 'receiver'
  });

UserSchema
  .fill('friends')
  .get(getFriends);

UserSchema
  .fill('pendingReceivedRequests')
  .get(getPendingReceivedRequests);

UserSchema
  .fill('pendingSentRequests')
  .get(getPendingSentRequests);

*/

UserSchema
  .path('username')
  .validate(validateUsername);

UserSchema
  .path('email')
  .validate(validateEmail);

UserSchema
  .path('password')
  .validate(validatePasswordInfo);

UserSchema
  .virtual('passwordConfirmation')
  .set(setPasswordConfirmation);

UserSchema.pre('save', hashPassword);

UserSchema.methods.validatePassword = validatePassword;

// FUNCTIONS -------------------------------------------------------------------

function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
}

function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

function validatePasswordInfo() {
  if (this.isNew) {
    if (!this.password) return this.invalidate('password', 'A password is required.');
    if (this.password.length < 6) return this.invalidate('password', 'Password must be longer than 6 characters.');
    if (this.password !== this._passwordConfirmation) return this.invalidate('password', 'Passwords do not match.');
    if (this.password.indexOf(' ') > 0) return this.invalidate('password', 'Password must not contain white spaces.');
  }
}

function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
}

function validateEmail(email) {
  if (!validator.isEmail(email)) return this.invalidate('email', 'It must be a valid email address.');
}

function validateUsername(username) {
  if (username.indexOf(' ') > 0) return this.invalidate('username', 'Username must not contain white spaces.');
}

/*
function getFriends(next) {
  this.db.model('Request')
    .find({
      $or: [{ sender: this._id }, { receiver: this._id }],
      status: 'accepted'
    })
    .exec()
    .then(requests => {
      const friendIds = requests.map(request => {
        return request.sender.equals(this._id) ? request.receiver : request.sender;
      });
      return this.db.model('User')
        .find({ _id: { $in: friendIds }})
        .exec();
    })
    .then(users => {
      return next(null, users);
    })
    .catch(next);
}

function getPendingReceivedRequests(next){
  return this.db.model('Request')
    .find({
      receiver: this._id,
      status: 'pending'
    })
    .populate('sender')
    .exec(next);
}

function getPendingSentRequests(next){
  return this.db.model('Request')
    .find({
      sender: this._id,
      status: 'pending'
    })
    .populate('sender receiver')
    .exec(next);
}
*/