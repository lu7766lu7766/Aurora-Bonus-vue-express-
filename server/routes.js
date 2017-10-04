'use strict'

import { Router } from 'express'
// import knex from 'knex' // query builder
require('dotenv').config()
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST || '127.0.0.1',
    user : process.env.DB_USER || 'admin',
    password : process.env.DB_PWD || '',
    port : process.env.DB_PORT || '3306',
    database : process.env.DB_NAME || 'myapp_test'
  },
  migrations: {
    tableName: 'migrations'
  }
});
var bookshelf = require('bookshelf')(knex);
var User = bookshelf.Model.extend({
  tableName: 'users'
});
// console.log('host', process.env.DB_HOST || '127.0.0.1')
// console.log('user', process.env.DB_USER || 'admin')
// console.log('password', process.env.DB_PWD || '')
// console.log('port', process.env.DB_PORT || '3306')
// console.log('database', process.env.DB_NAME || 'myapp_test')

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

export default () => {

  // Home page.
  // router.get('', (req, res, next) => {
  //   var output = {
  //     message: 'Hello World!'
  //   }
  //   res.body = output
  //   // res.sendFile(__dirname + '/index.html');
  //   next()
  // })

  // Get all users.
  router.get('/users', async (req, res, next) => {
    var user = await User.where('id', '1').fetchAll({
      columns: ['guid', 'name', 'introducer']
    })
    res.body = user.toJSON()
    // res.status = 0
    next()
  })

  // Get the user by id.
  router.get('/users/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < users.length) {
      res.body = users[id]
      next()
    } else {
      var err = new Error('User Not Found')
      err.status = 400
      next(err)
    }
  })

  // Handle routes not found.
  router.use(function(req, res, next) {
    if (!req.route) {
      var err = new Error('Route Not Found')
      err.status = 404
      return next(err)
    }
    next()
  })

  return router
}

// export default router
