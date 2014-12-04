function clog(v){console.log(v);}

var express      = require('express'),
  bodyParser     = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler   = require('error-handler'),
  morgan         = require('morgan'),

  //TODO
  routes         = require(''),
  api            = require(''),
  http           = require('http'),
  path           = require('path');


app.set('port', process.env.PORT || 3000);
app.set('views',  __dirname + '/views');
// app.set('view engine', 'jade');
app.use( morgan('dev') );
app.use( bodyParser() );
app.use( methodOverride() );
app.use( express.static(path.join(__dirname, 'client')) );





//routes
//TODO
// app.get('/', routes.index);
// app.get('/partials/:name', routes.partials);

//all things retrieve
app.get('/api/games', api.retrieveGames);
app.get('/api/users', api.retrieveUsers;

//TODO
app.post('/api/users/:id', api.editItem);
app.post('/api/games/add', api.addItem);
app.get('*', routes.index);



http.createServer(app).listen(app.get('port'), function(){
  clog('Express server listening on port ' + app.get('port') );
})








