var express = require('express');
var mongoose = require('mongoose');

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://localhost/test', function (error) {
    if (error) {
        console.log(error);
        console.log('error in MONGODB CONNECT');
    }
});

// Mongoose Schema definitions
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id:                 Number,
    name:               String,
    predictionsCorrect: Number,
    predictionsMade:    Number
});
var GameSchema = new Schema({
    id:        Number,
    winResult: String,
    isDone:    Boolean,
    teams:     Array
});


// Mongoose Model definition
var User = mongoose.model('users', UserSchema);
var Game = mongoose.model('games', GameSchema);


//for removing all documents
// Game.find().remove().exec();


exports.db = {User:User,Game:Game};




