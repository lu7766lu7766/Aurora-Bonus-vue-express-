import knex from '../knex'

var update = async (req, res, next) => {
  var user = await knex.select('guid', 'name', 'introducer', 'join').from('users')
  res.body = user
  next()
}

export default{
  update
}
