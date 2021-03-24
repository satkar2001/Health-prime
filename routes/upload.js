const express = require('express')
const router = express.Router()

router.post('/',(req,res)=>{

    if(req.files){
      var  img =req.files.image
      var imgname=img.name
      
      img.mv('./uploads/'+imgname,function(err){
        if(err){
          res.send(err)
        }
      })
    }
  
    const {PythonShell} =require('python-shell');
  
    let options = {
      mode: 'text',
      pythonOptions: ['-u'], // get print results in real-time
        scriptPath: './src/', //If you are having python_test.py script in same folder, then it's optional.
      args: [imgname] //An argument which can be accessed in the script using sys.argv[1]
    };
  
    PythonShell.run('api.py', options, function (err, result){
      if (err) throw err;
      //console.log('result: ', result.toString());
      var data = result
      res.send(result)
    })
  
});

module.exports = router;