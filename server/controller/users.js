
import knex from '../knex'
class Users {
  async getUsers (req, res, next) {
    var user = await knex.select('guid', 'name', 'introducer', 'join').from('users')
    res.body = user
    next()
  }

  async doLogin (req, res, next) {
    // var user = await knex.select('guid', 'name', 'introducer', 'join').from('users').where({

    // })
    req.session.test = {
      a: "1",
      b: "2"
    }
    res.body = {}
    next()
  }

  async addUser (req, res, next) {
    var user = req.body.user
    console.log(user)
    res.body = user
    next()
  }

  async getBonus (req, res, next) { }

  async getSession (req, res, next) {
    // req.session.test = {
    //   a: "1",
    //   b: "2"
    // }
    // console.log(req.session)
    // res.code = 100001
    // res.body = req.session
    next()
  }

}
export default new Users()
