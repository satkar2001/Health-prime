const path=require('path');
var fs = require('fs');
var FormData = require('form-data');
const express = require('express');
const upload=require('express-fileupload')
const app = express();
const request = require('request');
const fetch=require('node-fetch');

const api_key='34792bf45b94aca78a6f4a03a1b704facf862510';
// var form = new FormData();
// form.append('file', fs.createReadStream(__dirname + './uploads/pic.jpg'))
// var url='https://api.logmeal.es/v2/recognition/dish';
// var img='./uploads/00RICEGUIDE8-articleLarge.jpg';
// var headers = { 'Authorization': 'Bearer ' + api_key};

app.use(upload())
const staticPath=path.join(__dirname,'../public');

app.use(express.static(staticPath));
// listen for requests
app.listen(3000);

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
var resp=request.post({ url: url,form:form, headers: headers },function (err, res, body) {
  console.log(resp.json()["recognition_results"]);
});



