const config = {
  username: process.env.MYSQL_USER || 'admin',
  password: process.env.MYSQL_PASSWORD || 'secret',
  database: process.env.MYSQL_DATABASE || 'ecomm-finance',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  dialect: 'mysql',
  operatorAliases: false,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
