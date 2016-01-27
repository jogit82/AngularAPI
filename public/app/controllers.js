var appCtrls = angular.module('AppCtrls', []);

appCtrls.controller('HikesCtrl', ['$scope', '$http', function($scope, $http){
	//console.log(results);

	$scope.hikes = [];

	var uri = 'https://api.transitandtrails.org/api/v1/trips.json';

	 var req = {
	    url: uri,
	    method: 'GET',
	    params: {
	      key: 'a757f393826253f1dc087832b0083fda38ef2c8149f2cd7913d877d8f74a3f11'
	    }
	 }

	$http(req).then(function success(res) {
		$scope.hikes = res.data;
	}, function error(res) {
		console.log(res);
	});
}]);