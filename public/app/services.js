var appServices = angular.module('AppServices', ['ngResource']);

appServices.factory('Stuff', ['$resource', '$http', function($resource){
	return $resource('http://localhost:3000/api/stuff/:id');
}]);

appServices.factory('Hikes', ['$resource', function($resource){
	return $resource('https://api.transitandtrails.org/api/v1/trips?key=a757f393826253f1dc087832b0083fda38ef2c8149f2cd7913d877d8f74a3f11')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err;
	});
}]);

