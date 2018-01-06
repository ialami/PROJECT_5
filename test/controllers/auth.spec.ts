import {
    chai,
    faker,
    server
} from '../support/index';

// let fakeUser: object;

describe('User authentication tests', allTests);

function allTests() {
    before(removeAllCollections);
    beforeEach(createUser);
    afterEach(clearUser);
    describe('POST /api/register', registerTests);
}

function removeAllCollections(done) {
    faker
      .clear()
      .then(() => done())
      .catch((err: any) => {
        return done(err);
      });
}

function createUser(done) {
    faker   
        .User()
        .then((data: any) => {
            const fakeUser = data;
            console.log('fakeUser', fakeUser)
            done();
        })
        .catch((err: any) => {
            return done(err)
        })
}

function clearUser(done) {
    faker
        .clear()
        .then(() => done())
        .catch(() => {
            return done();
        });
}

// REGISTRATION TESTS ---------------------

function registerTests() {
    it('should register a user with the correct credentials', correctCredentials);
    // it('should not register a user without an email', mustHaveEmail);
    // it('should not register a user without a password', mustHavePassword);
}

function correctCredentials(done) {
    chai
        .request(server)
        .post('/api/register')
        .then((res: any) => {
            // type of response
            res.should.have.status(200);
            res.type.should.equal('application/json');
            // object with correct keys
            res.body.should.be.a('object');
            res.body.should.have.property('user');
            res.body.should.have.property('token');
            res.body.should.have.property('message');
            // user key
            res.body.user.should.be.a('object');
            // -- verify keys
            res.body.should.have.property('email');
            res.body.should.have.property('password');
            res.body.should.have.property('username');
            res.body.should.have.property('fullName');
            res.body.should.have.property('_id');
            res.body.should.have.property('passwordConfirmation');
            res.body.should.have.property('id');
            // -- verify types
            res.body.user.email.should.be.a('string');
            res.body.user.password.should.be.a('string');
            res.body.user.username.should.be.a('string');
            res.body.user.fullName.should.be.a('string');
            res.body.user._id.should.be.a('string');
            res.body.user.passwordConfirmation.should.be.a('string');
            res.body.user.id.should.be.a('string');
            // token key
            res.body.token.should.be.a('string');
            // message key
            res.body.message.should.be.a('string');
        })
}