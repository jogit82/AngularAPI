var appCtrls = angular.module('AppCtrls', ['StuffServices']);

appCtrls.controller('HomeCtrl', ['$scope', 'Stuff', function($scope, Stuff){
	$scope.stuff = [];
	//query is built on to the resource dependency to query apis
	Stuff.query(
		function success(data){
			$scope.stuff = data;
		}, function error(data) {
			console.log(data);
		}
	);
}])