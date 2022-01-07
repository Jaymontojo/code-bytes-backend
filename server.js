const express = require('express');
const db = require('./knex.js');

const app = express();

app.get('/hello', (req, res) => {
  res.send('hello world')
})

module.exports = app;