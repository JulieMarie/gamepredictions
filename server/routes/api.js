function clog(v){console.log(v);}
var db = require('../mongo-db.js').db;


var users = {
  'users':[
    {
      id:1,
      name:'Papa Smurf',
      predictionsCorrect:1,
      predictionsMade:1
    },
    {
      id:2,
      name:'Lady Gaga',
      predictionsCorrect:1,
      predictionsMade:1
    },
    {
      id:3,
      name:'Red Kool-aid Guy',
      predictionsCorrect:1,
      predictionsMade:1
    }
  ]
};

var games = {
  'games':[
    {
      id:1,
      winResult: false,
      isDone: false,
      teams:['Chicago Bulls', 'Boston Red Sox']
    },
    {
      id:2,
      winResult: false,
      isDone: false,
      teams:['Da Bears', 'Kevin Spacey']
    },
    {
      id:3,
      winResult: false,
      isDone: false,
      teams:['Backstreet Boys', 'N\'Sync']
    },
    {
      id:4,
      winResult: false,
      isDone: false,
      teams:['Blue', 'Magenta']
    }
  ]
};

var predictions = {
  'predictions':[
  ]
};


//they will be requesting the inventory with GET
//basically sending the inventory but also sending
//the id of the items so it's easier to delete
exports.retrieveGames = function(req, res){
  clog('inside retrieveGames... sending..');
  clog(games);
  res.json(games);
};

exports.retrieveUsers = function(req, res){
  clog('inside retrieveUsers... sending..');
  clog(users);
  res.json({ users: users });
};


exports.updateGame = function(req, res){

  
  var id = req.params.id;
  if(games.games[id].id === req.body.id){
    games.games[id] = req.body;
  }
  
  res.json(req.body);
};

exports.addToDB = function(req, res){
  // var Game = db.Game;
  var newGame = new db.Game({
    id:        4,
    winResult: true,
    isDone:    false,
    teams:     ['Bears','SK1']
  });

  newGame.save(function(err, newGame){
    if(err){
      console.log('error in newGame.save')
      return console.error(err);
    }
    res.send('new game is saved aga22222in!!!');
    
  });
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
