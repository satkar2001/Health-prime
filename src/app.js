const path=require('path');
//var fs = require('fs');
//var FormData = require('form-data');
const express = require('express');
const upload=require('express-fileupload')
const app = express();
const request = require('request');

const fetch=require('node-fetch');

const multer = require('multer');
const { publicDecrypt } = require('crypto');

const api_key='34792bf45b94aca78a6f4a03a1b704facf862510';

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

app.post('/',(req,res)=>{
  if(req.files){
    console.log(req.files);
    var  file =req.files.file
     var filename=file.name
     console.log(filename);

     file.mv('./uploads/'+filename,function(err){
       if(err){
         res.send(err)
       }
       else{
         console.log('file uploaded')
       }
     })

  }
}
);
// var resp=request.post({ url: url,form:form, headers: headers },function (err, res, body) {
//   console.log(resp.json()["recognition_results"]);
// });



