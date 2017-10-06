
exports.hash = function (val) {
  var bcrypt = require('bcrypt')
  const saltRounds = 8
  var salt = bcrypt.genSaltSync(saltRounds)
  return bcrypt.hashSync(val, salt)
}

exports.isEqual = (val, hash) => {
  var bcrypt = require('bcrypt')
  // bcrypt.compareSync(myPlaintextPassword, hash)
  return bcrypt.compareSync(val, hash)
  // return bcrypt.compareSync('Ab12345', 'hash')
}
