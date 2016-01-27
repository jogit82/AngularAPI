var app = angular.module('AngularApp', ['ngRoute', 'AppCtrls']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/stuff.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html'
  })
  .when('/hikes', {
    templateUrl: 'app/views/hikes.html',
    controller: 'HikesCtrl'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);