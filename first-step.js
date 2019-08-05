var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


app.get('/', function(req, res){ 
 	res.render('index',{user: "Great User",title:"homepage"});
}); 


app.listen(3000, function() {
 console.log('Server listening on port ‘ + port + ‘…');
});