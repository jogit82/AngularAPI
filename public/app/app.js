var app = angular.module('AngularApp', ['ngRoute', 'StuffCtrls']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/stuff.html',
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