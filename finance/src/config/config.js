require('dotenv').config();

const config = {
  HOST: process.env.MYSQL_HOST,
  USER: process.env.MYSQL_USER,
  PASSWORD: process.env.MYSQL_PASSWORD,
  ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
  MYSQL: process.env.MYSQL_NAME,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
