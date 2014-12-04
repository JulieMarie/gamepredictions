function clog(v){console.log(v);}
var db = require('../mongo-db.js').db;




//they will be requesting the inventory with GET
//basically sending the inventory but also sending
//the id of the items so it's easier to delete
exports.retrieveGames = function(req, res){
  // clog('inside retrieveGames... sending..');
  // clog(games);
  // res.json(games);
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
  // clog('inside retrieveUsers... sending..');
  // clog(users);
  // res.json({ users: users });
  db.User.find(function(err, users){
    if(err){
      console.log("error in Game.find");
      console.error(err);
    }
    console.log('USERS!!! inside retrieve users');
    res.json(users);
  });
};


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

exports.addGame = function(req, res){
  var newGame = new db.Game({
    id:        req.body.id,
    winResult: req.body.winResult,
    isDone:    req.body.isDone,
    teams:     req.body.teams
  })

  newGame.save(function(err, newGame){
    if(err){
      console.log('error in newGame.save')
      return console.error(err);
    }
      console.log('new game is saved!');
  });
};


exports.addUser = function(req, res){
  
};

//adding items
//used with POST, add the item to storage
//then send what they sent us back
// exports.addItem = function(req, res){
  // storage.inventory.push(req.body);
  // res.json(req.body);
  // console.log(storage);
// };







//editing items
//deleting items
