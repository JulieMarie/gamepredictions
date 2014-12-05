angular.module('game-predictions', [
  'game-predictions.services',
  'game-predictions.predictions',
  'game-predictions.games',
  'game-predictions.users',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/predictions', {
      templateUrl: 'app/predictions/predictions.html',
      controller: 'PredictionController'
    })
    .when('/games', {
      templateUrl: 'app/games/games.html',
      controller: 'GameController'
    })
    .when('/users', {
      templateUrl: 'app/user/users.html',
      controller: 'UserController'
    })
    .otherwise({
      redirectTo: '/'
    });
});