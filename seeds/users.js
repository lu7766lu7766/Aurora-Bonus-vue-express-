

exports.seed = function(knex, Promise) {
  require('../src/assets/lib')
  const uuid = require('uuid/v4')
  var bcrypt = require('bcrypt')
  const saltRounds = 8
  var salt = bcrypt.genSaltSync(saltRounds)
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          guid: uuid(),
          name: 'admin',
          password: bcrypt.hashSync('Ab12345', salt),
          join: new Date().Format('Y-m-d')
        }
      ]);
    });
};
