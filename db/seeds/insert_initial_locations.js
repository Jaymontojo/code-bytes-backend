
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {name: 'FamilyMart', location_address: '〒106-0031 Tokyo, Minato City, Nishiazabu 3 Chome-2-21', lat_coordinate: 35.65860597327912, lon_coordinate: 139.72745182730918},
        {name: 'Café Eight', location_address: '〒106-0031 Tokyo, Minato City, Nishiazabu, 3 Chome−2−13, Court Annex Roppongi, 2F', lat_coordinate: 35.65972092925435, lon_coordinate: 139.72769264247358},
        {name: 'Bricolage bread & co.', location_address: '〒106-0032 Tokyo, Minato City, Roppongi, 6 Chome−15−1 Keyaki Terrace, 1F', lat_coordinate: 35.659238322358746, lon_coordinate: 139.72824138017538},
        {name: 'Shake Shack', location_address: '〒106-0032 Tokyo, Minato City, Roppongi, 6 Chome−2−31 Roppongi Building North Tower 1F', lat_coordinate: 35.662118506466896, lon_coordinate: 139.73038843467486},
      ]);
    });
};
