var app = angular.module('AngularApp', ['ngRoute', 'AppCtrls', 'ngSanitize']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/index.html',
    controller: 'HomeCtrl'
  })
  .when('/comment', {
    templateUrl: 'app/views/comment.html',
    controller: 'CommentCtrl'
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