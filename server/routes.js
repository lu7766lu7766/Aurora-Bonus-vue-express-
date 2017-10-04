'use strict'

import { Router } from 'express'
import knex from 'knex' // query builder

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
  router.get('/users', (req, res, next) => {
    res.body = users
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
