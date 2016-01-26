var stuffServices = angular.module('StuffServices', ['ngResource']);

stuffServices.factory('Stuff', ['$resource', function($resource){
	return $resource('http://localhost:3000/api/stuff/:id');
}]);