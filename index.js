/**
 * Babel ES6, ES7 to ES5
 */
require('babel-register');
require('babel-polyfill');

/**
 * Run file .env to set environment variables
 */
require('dotenv').config();

/**
 * Kill process after Ctrl+C in terminal,
 * when use node-oracle, port run is not killed
 * this is useful for development
 */
process.on('SIGINT', () => {
  process.exit(0);
});

/**
 * Your server here, with babel configure
 */
require('./server');
// require('./test');
