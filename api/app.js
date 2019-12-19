const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const pathToIndex = path.resolve(__dirname, '../client/index.html');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/*', (request, response) => {
  response.sendFile(pathToIndex);
});
module.exports = app;

