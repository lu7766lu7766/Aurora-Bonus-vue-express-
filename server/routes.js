'use strict'

import { Router } from 'express'
import users from './controller/users'
import score from './controller/score'

const router = Router()

export default () => {
  /**
   * 登入，取得下線
   */
  router.post('/users/login', users.doLogin)
  router.get('/users/session', users.getSession)
  /**
   * 紅利結算
   */
  router.get('/users/bonus', users.getBonus)
  /**
   * 新增使用者，
   */
  router.post('/users/add', users.addUser)
  /**
   * 輸入登入時數
   */
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
