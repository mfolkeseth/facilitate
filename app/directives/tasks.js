'use strict';

angular.module('facilitate.tasks', [])
  .directive('faTasks', function(){
    var directive = {
      template: template,
      link: link,
      controller: ['$scope', '$http', function($scope, $http) {
        console.log('controller');
        $http({
          method: 'JSONP',
          url: 'http://polls.apiblueprint.org/tasks'
        })
        .error(function(data, status, headers, config) {
          console.log(status);
        })
        .success(function(data) {
          console.log(data);
        });

      }]
    };

    function link(scope, element, attrs){

    }

    function template(){
      return '<p>tasks</p>';
    }

    return directive;
  });
