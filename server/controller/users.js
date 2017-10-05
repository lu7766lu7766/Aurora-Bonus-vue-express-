
import knex from '../knex'

var getUsers = async (req, res, next) => {
  var user = await knex.select('guid', 'name', 'introducer', 'join').from('users')
  res.body = user
  next()
}

var addUser = async (req, res, next) => {
  var user = req.body.user
  console.log(user)
  res.body = user
  next()
}

var getBonus = async (req, res, next) => { }

export default{
  getUsers,
  addUser,
  getBonus
}
