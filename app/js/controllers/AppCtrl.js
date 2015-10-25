'use strict';

var app = require('./_index');

app.controller('AppCtrl', function($scope, $location, $state, AuthService) {

	$scope.user = AuthService.user;
	$scope.currentPage = $location.$$path;

	console.log("Location : ", $location);
	console.log("Current Path : ", $scope.currentPage);
	
	$scope.changePage = function(page){

		console.log("CHANGE ===> ", page);
		$scope.currentPage = page;
	}

});	
