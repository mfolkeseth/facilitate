'use strict';

angular.module('facilitate.navigation', [])
  .directive('faNavigation', function(){
    var directive = {
      template: template,
      link: link
    };

    function link(scope, element, attrs) {
      $(document).foundation();
    }

    function template(){
      return  '<nav class="top-bar" data-topbar role="navigation">' +
                '<ul class="title-area">' +
                  '<li class="name">' +
                    '<h1><a href="#/home">Facilitate</a></h1>' +
                  '</li>' +
                  '<li class="toggle-topbar menu-icon"><a href="#" onClick="return false;"role="button"><span>Menu</span></a></li>' +
                '</ul>' +
                '<section class="top-bar-section">' +
                  '<ul class="right">' +
                    '<li><a href="#/home">Home</a></li>' +
                    '<li><a href="#/about">About</a></li>' +
                '</section>' +
              '</nav>'
    }

    return directive;
  });
