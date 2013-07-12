var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  

  fs = require('fs')
  var rFile = fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log("working    " +data);
//  console.log(rFile);
 


    response.send(data);
  });
});


fs = require('fs')
var rFile = fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log("working    " +data);
//  console.log(rFile);
});

//console.log("this is PRINTING properly *******" + rFile + "***");

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
