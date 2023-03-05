require('dotenv').config();

const config = {
  username: 'root',
  password: 'secret',
  database: 'ecomm-finance',
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorAliases: false,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
