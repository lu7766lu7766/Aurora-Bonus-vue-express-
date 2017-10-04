'use strict';

var dbm;
var type;
var seed;

var crypto = require('crypto');
function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
};

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('users', {
    id: { type: 'int', primaryKey: true, autoIncrement: true, length: 10 },
    guid: { type: 'string' },
    name: 'string',
    password: 'string',
    introducer: 'string'
  })
  db.createTable('score', {
    id: { type: 'int', primaryKey: true, autoIncrement: true, length: 10 },
    guid: { type: 'string' },
    score: { type: 'int', length: 10 },
    user_guid: 'string'
  })
  return null
};

exports.down = function(db) {
  db.dropTable('users');
  db.dropTable('score');
  return null
};

exports._meta = {
  "version": 1
};
