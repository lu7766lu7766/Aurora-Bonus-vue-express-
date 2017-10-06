

exports.seed = function(knex, Promise) {
  require('../src/assets/lib')
  const uuid = require('uuid/v4')
  const bcrypt = require('../server/bcrypt')


  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          guid: uuid(),
          account: 'admin',
          name: 'Admin',
          password: bcrypt.hash('Ab12345'),
          join: new Date().Format('Y-m-d')
        }
      ]);
    });
};
