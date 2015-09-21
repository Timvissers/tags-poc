'use strict';

angular.module('myApp.js-tag', ['ngRoute', 'jsTag'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/js-tag', {
    templateUrl: 'js-tag/js-tag.html',
    controller: 'js-tag2Ctrl'
  });
}])

.controller('js-tag2Ctrl', ['$scope', function($scope) {
      $scope.jsTagOptions = {
        "texts": {
          "inputPlaceHolder": "Type text here"
        },
        "defaultTags": ["Default Tag #1", "Default Tag #2"]
      };
}]);