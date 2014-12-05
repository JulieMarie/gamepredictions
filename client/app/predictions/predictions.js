angular.module('game-predictions.predictions', [])

.controller('PredictionController', function($scope, Predictions) {

  $scope.data = {};
  $scope.getGames = function() {
    Predictions.getGames()
      .then(function(games) {
        $scope.data.games = games;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  $scope.getGames();

  $scope.predictions = [];
  // $scope.makePredictions = function() {
  //   console.log('in here');
  //   $scope.gamePredictions = angular.copy($scope.predictions);
  // };
  $scope.makePredictions = function(predictions) {
    console.log('in makePredictions');
    Predictions.makePredictions(predictions)
      .then(function() {
        angular.forEach($scope.data.games, function(game) {
          $scope.prediction_ids.push(game.prediction_id);
        })
      })
      .catch(function(error) {
        console.log(error);
      })
  };
});