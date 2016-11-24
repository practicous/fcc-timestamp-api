var express = require("express");

var app = express();


var formatDate = function(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var date = new Date();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

app.get('/time/:timeString', function (req, res) {
    console.log('Req params: ', req.params);
    
    var dateComing = req.params.timeString;
    
    if(parseInt(dateComing)){
      
      var timestampCheck = new Date(dateComing).getTime() > 0;
      var dateCheck = Date.parse(dateComing);
      var natural = new Date(parseInt(dateComing));
      
      res.json({"unix": dateComing,  "natural": formatDate(natural)});
      
    }else{
      
      if(new Date(dateComing).getTime() > 0){
        res.json({"unix": Date.parse(dateComing),  "natural": dateComing});
      }
      
    }
    res.json({"unix": null,  "natural": null});
    
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});