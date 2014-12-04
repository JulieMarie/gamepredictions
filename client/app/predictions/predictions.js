angular.module('game-predictions.predictions', [])

.controller('PredictionController', function($scope, Predictions, $timeout) {
  console.log('in PredictionController');
  
  var push = function(game) {
    return function() {
      $scope.data.games.push(game);
    };
  };

  $scope.getGames = function() {
    $scope.loading = true;
    Predictions.getGames()
      .then(function(games) {
        $scope.loading = false;
        games.forEach(function(game, delay) {
          $timeout(push(game), delay * 175);
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