var express = require('express');
var app = express();
var fs = require("fs");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 5000));

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
};

app.post('/addUser', function (req, res) {

    if(JSON.stringify(req.body) === '{}'){
      res.status(400).send("bad parameters")
    }
    else{
      console.log(req.body);
      res.status(200).end("Success");
    }
});

/*var id = 2;

app.delete('/deleteUser', function (req, res) {
    console.log(req);
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + id];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
});
*/
var id = 2;

app.delete('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
      // console.log( data );
       res.end( JSON.stringify(data));
   });
});

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

