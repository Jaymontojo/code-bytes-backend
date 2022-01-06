
exports.up = function(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id');
    table.string('name').notNullable()
    table.string('location_address').notNullable()
    table.float('lat_coordinate').notNullable()
    table.float('lon_coordinate').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('locations');
};
