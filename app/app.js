'use strict';

// Declare app level module which depends on views, and components
angular.module('facilitate', [
    'ngRoute',
    'facilitate.navigation',
    'facilitate.home',
    'facilitate.about'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'components/home/home.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'components/about/about.html',
        controller: 'AboutController'
    })
    .otherwise({redirectTo: '/home'});
}])
.controller('MainController', ['$scope', function($scope) {
  console.log('main controller');
}]);
