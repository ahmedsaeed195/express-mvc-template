const express = require('express')
const Route = require('./routes/routes')
const app = express()
var multer = require('multer');
var upload = multer();
require('dotenv').config()

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.static('public'));
app.use('/' , Route)


const PORT = process.env.PORT || 3000
app.listen(PORT , () => console.log(`Listening on http://127.0.0.1:${PORT}`))