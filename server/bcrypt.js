
exports.hash = function (val) {
  var bcrypt = require('bcrypt')
  const saltRounds = 8
  var salt = bcrypt.genSaltSync(saltRounds)
  return bcrypt.hashSync(val, salt)
}
