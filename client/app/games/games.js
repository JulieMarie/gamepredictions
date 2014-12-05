angular.module('game-predictions.games', [])

.controller('GameController', function($scope, Games) {
  $scope.createGame = Games.createGame;
});