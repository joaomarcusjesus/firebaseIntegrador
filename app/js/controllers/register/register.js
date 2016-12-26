'use strict';

angular.module('myApp.register', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'js/controllers/register/register.html',
    controller: 'registerCtrl'
  });
}])

.controller('registerCtrl', ['$scope', '$location', '$rootScope', function(
    $scope, $location, $firebaseAuth, $rootScope) {

    var rootRef = firebase.database().ref();
    $scope.user = {};

    $scope.signIn = function() {
        var email = $scope.user.email;
        var password = $scope.user.password;

        if(!email || !password) {
                console.log('Sorry you not found Email or Password!');
          }
         firebase.auth().signInWithEmailAndPassword(email, password)
                      .catch(function(error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                  });
         var user = firebase.auth().currentUser;
            if (user) {
              $location.path('/home');
            } else {
              console.log('Sorry you not found credentials!');
            }
        }

}]);
