function clog(v){console.log(v);}

var express      = require('express')        ,
  bodyParser     = require('body-parser')    ,
  methodOverride = require('method-override'),
  morgan         = require('morgan')         ,
  api            = require('./routes/api.js'),
  http           = require('http')           ,
  path           = require('path')           ,
  app            = express()                 ;



app.set('port', process.env.PORT || 3000);
// app.set('views',  __dirname + '/views');
// app.set('view engine', 'jade');
app.use( morgan('dev') );
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use( methodOverride() );
app.use( express.static(path.join(__dirname, '../client')) );




//all things read
app.get('/api/games', api.retrieveGames);
app.get('/api/users', api.retrieveUsers);

//all things update
app.post('/api/games/:id', api.updateGame);
app.post('/api/users/:id',  api.updateUser);

//all things add
app.post('/api/games/', api.addGame);
app.post('/api/users/',  api.addUser);



http.createServer(app).listen(app.get('port'), function(){
  clog('Express server listening on port ' + app.get('port') );
})








