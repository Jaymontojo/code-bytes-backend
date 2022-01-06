
exports.up = function(knex) {
  return knex.schema.renameTable('location', 'locations')
};

exports.down = function(knex) {
  return knex.schema.dropTable('location');
};
