'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.angular-tags',
  'myApp.angular-tagger',
  'myApp.ng-tags-input'
]).
config(['$routeProvider', function($routeProvider) {
  //$routeProvider.otherwise({redirectTo: '/angular-tags'});
}]);
