const express = require('express');
const db = require('./knex.js');
const app = require('./server');
const PORT = process.env.PORT || 4000;

(async () => {
  try {
    db.migrate.latest()
    .then(function() {
      return db.seed.run();
    })
    .then(function() {
      // migrations are finished
    });
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`)
    })
  } catch (err) {
    console.error(`App failed to start`, err)
    process.exit(-1)
  }
})();

