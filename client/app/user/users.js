angular.module('game-predictions.users', [])

.controller('UserController', function($scope, Users) {

  $scope.data = {};
  $scope.getUsers = function() {
    Users.getUsers()
      .then(function(users) {
        $scope.data.users = users.users;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  $scope.getUsers();
});