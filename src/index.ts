// Setup express app
import * as express from 'express';
const app       = express();

/*
// setup sockets for live chat

import * as http from 'http'; // where do you get http from if it's not a package?
import * as cors from 'cors';
const server   = http.createServer(app);
require('./lib/sockets')(sockets);

sockets.connect(server);
*/

const mongoose        = require('mongoose');
mongoose.Promise      = require('bluebird');
// mongoose.plugin(require('./lib/globalToJSON')); // Uncomment when lib file created
mongoose.plugin(require('mongoose-unique-validator'));

import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import config from './environment/config';
// const { port, dbURI }   = require('./environment/config');
const routes          = require('./routes/routes');
// const customResponses = require('./lib/customResponses');
// const errorHandler    = require('./lib/errorHandler');

mongoose.connect(config.dbURI, { useMongoClient: true });

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
// app.use(cors()); // uncomment when cors imported

// app.use(customResponses); //uncomment when file created

app.use('/api', routes);
// app.get('/*', (req, res) => res.sendfile(`${__dirname}/public/index.html`)); //uncomment when index.html created

// app.use(errorHandler); //uncomment when file created

app.listen(config, () => console.log(`Express app is listening on port ${config.port}`));
// server.listen(port, () => console.log(`Express is listening on port ${port}`));

