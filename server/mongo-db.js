var express = require('express');
// Mongoose import
var mongoose = require('mongoose');

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://localhost/test', function (error) {
    if (error) {
        console.log(error);
        console.log('error in MONGODB CONNECT');
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    id:                 Number,
    name:               String,
    predictionsCorrect: Number,
    predictionsMade:    Number
});

// Mongoose Model definition


var GameSchema = new Schema({
    id:        Number,
    winResult: Boolean,
    isDone:    Boolean,
    teams:     Array
});

var User = mongoose.model('users', UserSchema);
var Game = mongoose.model('games', GameSchema);

var newGame = new Game({
  id:        5,
  winResult: false,
  isDone:    false,
  teams:     ['Bulls','Broncos']
})

newGame.save(function(err, newGame){
  if(err){
    console.log('error in newGame.save')
    return console.error(err);
  }
  console.log('new game is saved!');
});

// Game.find(function(err, games){
//   if(err){
//     console.log("error in Game.find");
//     console.error(err);
//   }
//   console.log("the games beloe!")
//   console.log(games);
// });
console.log('consoling GAMEGAMGAEMGE')
console.log(Game);


// exports.db = Game;
exports.db = {User:User,Game:Game};





// URLS management

// app.get('/', function (req, res) {
//     res.send("<a href='/users'>Show Users</a>");
// });

// app.get('/users', function (req, res) {
//     User.find({}, function (err, docs) {
//         res.json(docs);
//     });
// });

// app.get('/users/:email', function (req, res) {
//     if (req.params.email) {
//         User.find({ email: req.params.email }, function (err, docs) {
//             res.json(docs);
//         });
//     }
// });

// Start the server
// app.listen(80);



