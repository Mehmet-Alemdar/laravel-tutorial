import './bootstrap';
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function($scope) {

  $scope.message = "Hello mehmet";
  
});