const pino = require('pino');

module.exports.logger = pino({
  name: process.env.app__APP_ID || 'crypto-badge',
  level: process.env.app__LOG_LEVEL || 'trace',
});
