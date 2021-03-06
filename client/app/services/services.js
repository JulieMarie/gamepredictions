angular.module('game-predictions.services', [])

.factory('Predictions', function ($http) {
  var getGames = function() {
    return $http({
      method: 'GET',
      url: '/api/games'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var makePrediction = function(prediction) {
    return $http({
      method: 'POST',
      url: '/api/predictions',
      data: prediction
    }).
    then(function (resp) {
      return resp.data;
    });
  };

  return {
    getGames: getGames,
    makePrediction: makePrediction
  };
})

.factory('Games', function($http){
  return {
      createGame:function(id, team1, team2){
        var gameObj = {
          id:        id,
          winResult: 'null',
          isDone:    false,
          teams:     [team1, team2]
        };  
        $http.post('/api/games', gameObj)
          .success(function(){
            console.log('yay, game created')
          })
      },
      deleteGames:function(){
        $http.delete('/api/games')
          .success(function(){
            console.log('yay, games deleted')
          })
      },
      getGames:function(callback){
        return $http({
          method: 'GET',
          url: '/api/games'
        })
        .then(function (resp) {
          return resp.data;
        });
      }
  };
})

.factory('Users', function($http) {
  var getUsers = function() {
    return $http({
      method: 'GET',
      url: '/api/users'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getUsers: getUsers
  };
});