require('dotenv').config()

export default require('knex')({
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
})

// console.log('host', process.env.DB_HOST || '127.0.0.1')
// console.log('user', process.env.DB_USER || 'admin')
// console.log('password', process.env.DB_PWD || '')
// console.log('port', process.env.DB_PORT || '3306')
// console.log('database', process.env.DB_NAME || 'myapp_test')
