'use strict'

import { Router } from 'express'
import users from './controller/users'
import score from './controller/score'

const router = Router()

export default () => {

  // Get all users.
  router.get('/users', users.getUsers)
  router.get('/users/bonus', users.getBonus)
  // Get the user by id.
  router.post('/users/add', users.addUser)

  // Set score
  router.post('/score/update', score.update)



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
