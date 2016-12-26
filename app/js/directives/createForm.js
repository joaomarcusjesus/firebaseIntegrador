angular.module('myApp.directives')
  .directive("myNewForm", function() {
    return {
        templateUrl: "register/signup.html",
        replace: true,
        scope: {

        }
    };
  });
