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

  var makePredictions = function (predictions) {
    return $http({
      method: 'POST',
      url: '/api/predictions',
      data: predictions
    });
  };

  return {
    getGames: getGames,
    makePredictions: makePredictions
  };
});
