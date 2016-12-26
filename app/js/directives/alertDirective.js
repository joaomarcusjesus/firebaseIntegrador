var app = angular.module('myApp.directives', []);

app.directive('alertmsg', [function () {
	return {
		restrict: 'AE',
			template: '<div class="alert alert-success text-center"><p>{{ title }}:<b ng-transclude>Msg Alert!</b></p></div>',
			scope: {
			title: '@',
		},
		transclude: true
	};
}])