exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary()
    table.uuid('guid')
    table.string('name')
    table.string('password')
    table.string('introducer')
    table.date('join')
  }).createTable('score', function(table) {
    table.increments('id').primary()
    table.uuid('guid')
    table.string('score')
    table.string('users_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
  .dropTable('score')
};
