const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const router = require('./src/router')

const app = express()
const root = path.resolve(__dirname, '..', 'client')

app.use(bodyParser.urlencoded({extended: true}))

app.use('/', router)

app.use(express.static(path.resolve(__dirname, 'uploads')))

app.use('/*', (req, res) => {
  res.sendFile(path.resolve(root, 'index.html'))
})


module.exports = app
