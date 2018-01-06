import * as dotenv from 'dotenv';

process.env.NODE_ENV = 'test';

dotenv.config();

import * as _chai from 'chai';
import chaiHttp = require('chai-http');
_chai.use(chaiHttp);
export const expect = _chai.expect;
export const should = _chai.should();
export const chai: any = _chai;

export const mock = require('mock-require');

export const faker = require('./fake_data');
export const server = require(`../../src/index`);

