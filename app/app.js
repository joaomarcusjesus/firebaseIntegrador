'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register',
  'myApp.welcome',
  'myApp.ocorrencias'

]).
config(['$routeProvider',  function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/register'});
}]);
