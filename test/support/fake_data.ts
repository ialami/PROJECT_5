import * as bluebird from 'bluebird';

// Models
import { User } from '../../src/app/models';

module.exports = {
    
    User() {
        return new Promise((resolve, reject) => {
            const user = new User({
                email: 'ismail@ismail.com',
                password: 'password',
                passwordConfirmation: 'password',
                username: 'ismailou',
                fullName: 'Ismail Alami'
            });

            user
                .save()
                .then(resolve)
                .then(reject);
        });
    },
    clear() {
        return new Promise((resolve, reject) => {
            Promise.all([
                new Promise((resolve, reject) => {
                    User.find({})
                        .exec()
                        .then(users => bluebird.map(users, user => user.remove()))
                        .then(resolve)
                        .catch(reject)
                })
            ])
            .then(resolve)
            .catch(reject);
        });
    }

}