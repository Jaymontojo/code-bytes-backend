
exports.up = function(knex) {
  return knex.schema.createTable('location', (table) => {
    table.increments('id'),
    table.string('name'),
    table.string('location_address'),
    table.float('lat_coordinate')
    table.float('lon_coordinate')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('location');
};
