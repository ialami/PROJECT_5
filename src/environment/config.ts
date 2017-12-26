const port  = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/project-5';
const secret = 'f^dh@CVis--[Pd';

module.exports = { port, dbURI, secret };
