angular.module('game-predictions', [
  'game-predictions.services',
  'game-predictions.predictions',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/predictions', {
      templateUrl: 'app/predictions/predictions.html',
      controller: 'PredictionController'
    })
    .otherwise({
      redirectTo: '/'
    });
});