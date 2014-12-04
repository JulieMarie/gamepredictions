function clog(v){console.log(v);}
var db = require('../mongo-db.js').db;




//all things read
exports.retrieveGames = function(req, res){
  db.Game.find(function(err, games){
    if(err){
      console.log("error in Game.find");
      console.error(err);
    }
    console.log('GAMES!!! inside retrieve games');
    res.json(games);
  });
};
exports.retrieveUsers = function(req, res){
  db.User.find(function(err, users){
    if(err){
      console.log("error in Game.find");
      console.error(err);
    }
    console.log('USERS!!! inside retrieve users');
    res.json(users);
  });
};



//all things update
exports.updateGame = function(req, res){
  // var id = req.params.id;
  // if(games.games[id].id === req.body.id){
  //   games.games[id] = req.body;
  // }
  
  // res.json(req.body);
};

exports.updateUser = function(req, res){
  // var id = req.params.id;
  // if(games.games[id].id === req.body.id){
  //   games.games[id] = req.body;
  // }
  
  // res.json(req.body);
};


//all things add
exports.addGame = function(req, res){
  var newGame = new db.Game({
    id:        req.body.id,
    winResult: req.body.winResult,
    isDone:    req.body.isDone,
    teams:     req.body.teams
  });

  newGame.save(function(err, newGame){
    if(err){
      console.log('error in newGame.save')
      return console.error(err);
    }
      console.log('new game is saved!');
      res.send(newGame);
  });
};


exports.addUser = function(req, res){
  
};

