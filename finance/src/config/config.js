require('dotenv').config();

const config = {
  username: 'root',
  password: null,
  database: 'ecomm-finance',
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorAliases: false
  // host: process.env.MYSQL_HOST,
  // username: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PASSWORD,
  // root_password: process.env.MYSQL_ROOT_PASSWORD,
  // database: process.env.MYSQL_DATABASE,
  // port: process.env.MYSQL_PORT,
  // dialect: 'mysql',
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
