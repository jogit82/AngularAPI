var app = angular.module('AngularApp', ['ngRoute', 'AppCtrls']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/index.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);







// app.controller('MainCtrl', ['$scope', function($scope){
// 	$scope.test = 'hello';
// }]);