'use strict';

angular.module('myApp.ocorrencias', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ocorrencias', {
        templateUrl: 'js/controllers/ocorrencias/ocorrencias.html',
        controller: 'ocorrenciasCtrl'
    });
}])

.controller('ocorrenciasCtrl', ['$scope', '$location', '$firebaseObject', '$firebaseArray', function($scope, $location, $firebaseObject, $firebaseArray) {

    var ocorrencias = firebase.database().ref('Ocorrencias').child("Chamados");

    $scope.ocorrencias = $firebaseArray(ocorrencias);

    $scope.backPage = function() {
      $location.path('/home');
    }

    $scope.showForm = function() {
      $scope.editFormShow = true;
      clearForm();
    }

    $scope.hideForm = function() {
      $scope.editFormShow = false;
    }

    $scope.showMeeting = function(ocorrencia) {
      $scope.editFormShow = true;
      $scope.endereco = ocorrencia.endereco;
      $scope.status = ocorrencia.status;
      $scope.id = ocorrencia.$id;
    }

    $scope.editFormSubmit = function() {
      var id = $scope.id;
      var record = $scope.ocorrencias.$getRecord(id);
      record.endereco = $scope.endereco;
      record.status = $scope.status;

      $scope.ocorrencias.$save(record);
    }

    $scope.deleteMeeting = function(ocorrencia) {
      $scope.ocorrencias.$remove(ocorrencia);
    }
    function clearForm() {
      $scope.endereco = "";
      $scope.status = "";
    }
}]);
