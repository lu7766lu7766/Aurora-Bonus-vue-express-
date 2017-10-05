'use strict'

import { Router } from 'express'
import knex from './knex'

const router = Router()

export default () => {

  // Get all users.
  router.get('/users', async (req, res, next) => {

    var user = await knex.select('guid', 'name', 'introducer', 'join').from('users')

    res.body = user // user.toJSON()
    next()
  })

  // Get the user by id.
  router.get('/users/:id', async (req, res, next) => {
    // var user = await Users.where('id', req.params.id).fetchAll()
    // res.body = user.toJSON()
    next()
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
