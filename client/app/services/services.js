angular.module('game-predictions.services', [])

.factory('Predictions', function ($http) {
  var getGames = function () {
    return $http({
      method: 'GET',
      url: '/api/games'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addPredictions = function (prediction) {
    return $http({
      method: 'POST',
      url: '/api/predictions',
      data: prediction
    });
  };

  var games = [];

  return {
    getGames: getGames,
    addPredictions: addPredictions,
    games: games
  };
});
