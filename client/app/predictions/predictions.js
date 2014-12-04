angular.module('game-predictions.predictions', [])

.controller('PredictionController', function($scope, Predictions) {
  console.log('in PredictionController');

  $scope.getGames = function() {
    $scope.loading = true;
    Predictions.getGames()
      .then(function(games) {
        $scope.loading = false;
        games.forEach(function(game) {
          $scope.data.games.push(game);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  $scope.addPredictions = function() {
    Predictions.addPredictions($scope.games)
      .then(function() {
      })
      .catch(function(error) {
        console.log(error);
      })
  };
});