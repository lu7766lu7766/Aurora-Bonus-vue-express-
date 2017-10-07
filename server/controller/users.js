
import knex from '../knex'
import bcrypt from '../bcrypt'
import _ from 'lodash'
import uuid from 'uuid/v4'
import axios from 'axios'

const NO_USER = 10001
const UN_LOGIN = 10002
const PWD_ERROR = 10003
const FIELD_LACK = 10004
const USER_EXISTS = 10005

class Users {

  constructor() {
    // console.log(this.isUserExists)
  }

  getUsersSelector = async (req, res, next) => {
    var users = await knex('users').select('account', 'name')
    res.body = users
    next()
  }

  getUsers = async (req, res, next) => {
    var limit = req.query.limit || 50
    var offset = ((req.query.page || 1) - 1) * limit
    axios.all([
      knex('users as a').select('account', 'name', 'join', 'introducer', knex.raw('(select `name` from users where account = a.introducer) as introducer_name')) //
        .offset(offset).limit(limit),
      knex('users').count('* as total')
    ]).then(result => {
      var data = { users: result[0] }
      data.total = result[1][0].total
      res.body = data
      next()
    })
  }

  isLogin = async (req, res, next) => {
    if (req.session.user) {
      next()
    } else {
      res.code = UN_LOGIN
      res.body = {}
      next(false)
    }
  }

  doLogin = async (req, res, next) => {

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

  doLogout = async (req, res, next) => {
    _.omit(req.session, 'user')
    res.body = true
    next()
  }

  addUser = async (req, res, next) => {

    res.body = false
    var {account, name, password, introducer} = req.body
    if (account && name) {

      var result = await this.isUserExists(account)
      if (!result) {
        await knex('users').insert({
          guid: uuid(),
          account, name,
          password: bcrypt.hash(password),
          introducer
        })
        res.body = true
        next()
      } else {
        res.code = USER_EXISTS
        next(false)
      }
    } else {
      res.code = FIELD_LACK
      res.body = '欄位缺少'
      next(false)
    }
  }

  isUserExists = async (account) => {
    var res = await knex('users').where('account', account).select(knex.raw(1))
    return !!res.length
  }


  getBonus = async (req, res, next) => { }

  getUserDetail = async (req, res, next) => {
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
