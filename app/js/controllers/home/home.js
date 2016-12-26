'use strict';

angular.module('myApp.home', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'js/controllers/home/home.html',
        controller: 'homeCtrl'
    });
}])

.controller('homeCtrl', ['$scope', '$location', function($scope, $location, $rootScope) {

	$scope.logout = function() {
		firebase.auth().signOut();
		$location.path('/register');
	};
  $scope.ocorrencias = function() {
      $location.path('/ocorrencias');
    };

  $scope.users = [];

  var _users = function() {
    return firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $scope.users.push({
            name: user.name,
            email: user.email
        });
      } else {
        console.log("failed");
        return false;
      }
    });
  }
}]);
