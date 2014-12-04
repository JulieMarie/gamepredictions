angular.module('game-predictions.predictions', [])

.controller('PredictionController', function($scope, Predictions) {

  $scope.data = Predictions.games;
  $scope.getGames = function() {
    //$scope.loading = true;
    Predictions.getGames()
      .then(function(games) {
        //$scope.loading = false;
        console.log("getGames: ", games.length);
        $scope.data.games = games;
        console.log("getGames: ", $scope.data.games.length === 0);
        //games.forEach(function(game) {
        //  $scope.data.games.push(game);
        //});
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  $scope.getGames();

  $scope.addPredictions = function() {
    Predictions.addPredictions($scope.games)
      .then(function() {
      })
      .catch(function(error) {
        console.log(error);
      })
  };
});





