exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary()
    table.uuid('guid')
    table.string('account', 20)
    table.string('name', 20)
    table.string('password')
    table.string('introducer', 20)
    table.date('join')
  }).createTable('score', function(table) {
    table.increments('id').primary()
    table.uuid('guid')
    table.string('score')
    table.string('users_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users').dropTable('score')
};
