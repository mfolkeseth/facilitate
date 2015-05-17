'use strict';

angular.module('facilitate.home', [
  'facilitate.tasks'
])

.controller('HomeController', ['$scope', function($scope) {
  // var users = userService.getUsers();
  // users.success(function(data){
  //   $scope.users = data;
  // });
  console.log('sklfjdg');

  $scope.martin = "Martin";
  console.log($scope.martin);
}]);
