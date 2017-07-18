var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//init app

var app = express();

//set port
var port = 3000;

//bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



//static folder
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

//listen to port
app.listen(port, function(){
	console.log("port started at "+ port);

});