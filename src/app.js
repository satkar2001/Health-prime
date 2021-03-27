const path=require('path');
var fs = require('fs');
var FormData = require('form-data');
const express = require('express');
const upload=require('express-fileupload')
const app = express();
const request = require('request');
const fetch=require('node-fetch');

const multer = require('multer');
const { publicDecrypt } = require('crypto');
// Routers

const uploadRouter = require('../routes/upload');

app.use(upload())
const staticPath=path.join(__dirname,'../public');

app.use(express.static(staticPath));

app.use(multer({dest: './uploads/'}).single('image'))

// listen for requests
app.listen(3000);

// Routes

app.use('/upload', uploadRouter)

app.get('/', (req, res) => {

  res.sendFile('./public/index.html', { root: __dirname });

});
