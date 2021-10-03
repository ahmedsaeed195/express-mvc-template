const express = require('express')
const app = express()
const Route = require('./routes/routes')
var multer = require('multer')
require('dotenv').config()
var upload = multer()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(upload.array())
app.use(express.static('public'))
app.use('/' , Route)

const PORT = process.env.PORT || 3000
app.listen(PORT , () => console.log(`Listening on http://127.0.0.1:${PORT}`))