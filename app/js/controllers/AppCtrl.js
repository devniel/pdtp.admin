'use strict';

var app = require('./_index');

app.controller('AppCtrl', function($scope, $location, $state, AuthService) {

	$scope.user = AuthService.user;
	$scope.currentPage = $location.$$path;
	
	$scope.changePage = function(page){
		$scope.currentPage = page;
	}

});	
