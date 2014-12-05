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

  $scope.predictions = [];
  $scope.makePrediction = function(prediction) {
    prediction.gameid = prediction.winprediction.slice(0, 1);
    prediction.winprediction = prediction.winprediction.slice(2);
    Predictions.makePrediction(prediction)
      .then(function() {
        $scope.predictions.push();
      })
      .catch(function(error) {
        console.log(error);
      })
  };
});