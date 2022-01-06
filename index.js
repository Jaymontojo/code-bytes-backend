const express = require("express");
const db = require("./knex.js");
const app = express();
const PORT = process.env.PORT || 4000;

(async () => {
  try {
    app.get('/hello', (req, res) => {
      res.send('hello world')
    }),

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
    console.error("App failed to start", err)
    process.exit(-1)
  }
})();

