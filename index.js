//load dev vars from local config
const env = process.env.NODE_ENV || 'development';
process.env.NODE_ENV = env;

require('babel-polyfill');
require('babel-register');
require('./src/server/index.js');
