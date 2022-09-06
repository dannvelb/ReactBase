const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/build'));
app.get('*',function(req,res){
  console.log(__dirname+'/build/index.html')
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(process.env.PORT || 5001);
