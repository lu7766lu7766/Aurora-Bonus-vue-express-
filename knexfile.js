// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST || '127.0.0.1',
      user : process.env.DB_USER || 'admin',
      password : process.env.DB_PWD || '',
      port : process.env.DB_PORT || '3306',
      database : process.env.DB_NAME || 'test'
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};
