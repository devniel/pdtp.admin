'use strict';

var app = require('./_index');

app.controller('AppCtrl', function($scope, $state, AuthService) {

	$scope.user = AuthService.user;

});	
