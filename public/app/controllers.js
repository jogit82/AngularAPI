var appCtrls = angular.module('AppCtrls', []);

appCtrls.controller('HikesCtrl', ['$scope', '$http', function($scope, $http){
	//console.log(results);

	$scope.hikes = [];
	$scope.searchTerm = '';
	$scope.results = [];

	var searchHikes = function(){
		if($scope.hikes.indexOf($scope.searchTerm) !=-1 && $scope.searchTerm != ''){
			$scope.hikes.forEach(function(hike){
				$scope.results.push(hike);
			})
		};
	}

	$scope.$watch(function(){
		return $scope.searchTerm;
	}, function(oldVal,newVal){
		console.log($scope.searchTerm);
	})

		

	var uri = 'https://api.transitandtrails.org/api/v1/trips';

	 var req = {
	    url: uri,
	    method: 'GET',
	    params: {
	      key: 'a757f393826253f1dc087832b0083fda38ef2c8149f2cd7913d877d8f74a3f11'
	    }
	 }

	$http(req).then(function success(res) {
		$scope.hikes = res.data;
		// console.log(res.data);
	}, function error(res) {
		console.log(res);
	});
}]);

appCtrls.controller('CommentCtrl', ['$scope', '$http', function($scope, $http){
	
}]);