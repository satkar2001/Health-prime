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

app.use('/upload', uploadRouter)

app.get('/', (req, res) => {

  res.sendFile('./public/index.html', { root: __dirname });

});


  //console.log(imgname)
  
  /*
  var json;
  const spawn = require('child_process').spawn
  let p = new Promise((resolve, reject) => {
    const childPython = spawn('python3', ['./src/api.py', imgname.toString()])
    
    childPython.stdout.on('data', (data) => {
      console.log(data.toString())
      json = data.toString()
    })

    if(json){
      resolve(json)
    } else {
      reject("Nope")
    }
  })
  
  p.then(msg => {
    console.log(msg)
  }).catch(err => {
    console.log("error" + err)
  })
  
  */
  /*
  childPython.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(json + "Yo")
    });
    */
  //console.log(img)
/*
  fetch(url,{
    method: 'POST',
    body: {
      files: {
        'image': img
      },
      headers: headers
    }
  }).then(res => {
    res.json()
  })
*/



  /*
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

var resp=request.post({ url: url,files: {'image': fs.readFile('./uploads/' + imgname, function (err, data) {
  if (err) throw err
  return data
})}, headers: headers },function (err, res, body) {
  //console.log(err);
  console.log(resp.json());
});

*/