const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const app = express()
const root = path.resolve(__dirname, '..', 'client')

app.use('/*', (req, res) => {
  res.sendFile(path.resolve(root, 'index.html'))
})


module.exports = app
