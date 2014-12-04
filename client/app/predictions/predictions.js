angular.module('game-predictions.predictions', [])

.controller('PredictionController', function($scope, Predictions) {

  $scope.data = {};
  $scope.getGames = function() {
    Predictions.getGames()
      .then(function(games) {
        $scope.data.games = games.games;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  $scope.getGames();

  $scope.makePredictions = function() {
    Predictions.makePredictions($scope.games)
      .then(function() {
      })
      .catch(function(error) {
        console.log(error);
      })
  };
});





