
import knex from '../knex'
import bcrypt from '../bcrypt'
import _ from 'lodash'

const NO_USER = 10001
const UN_LOGIN = 10002
const PWD_ERROR = 10003

class Users {
  async isLogin (req, res, next) {
    if (req.session.user) {
      next()
    } else {
      res.code = UN_LOGIN
      res.body = {}
      next(false)
    }
  }

  async doLogin (req, res, next) {

    var user = ( await knex('users').where({account: req.body.account}).select('guid', 'account', 'name', 'password', 'introducer', 'join') )[0]

    res.body = false
    if (user && user.guid) {
      if (bcrypt.isEqual(req.body.password, user.password)) {
        req.session.user = _.omit(user, 'password')
        res.body = true
      } else {
        res.code = PWD_ERROR
      }
    } else {
      res.code = NO_USER
    }
    next()
  }

  async addUser (req, res, next) {
    // var user = req.body.user
    // console.log(user)
    res.body = false
    next()
  }

  async getBonus (req, res, next) { }

  async getUserDetail (req, res, next) {
    // res.code = 100001
    res.body = {}
    var user = req.session.user
    if (user) {
      res.body = user
    } else {
      res.code = UN_LOGIN
    }
    next()
  }

}
export default new Users()
