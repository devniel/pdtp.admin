'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {

	// @devniel
	// Intercepting $http request to add token authorization header to requests
	// from $http service, remember that with its provider we could config
	// a service. Based on :
	// https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/

	$httpProvider.interceptors.push('AuthInterceptor');

	$locationProvider.html5Mode(true);

	$stateProvider
	.state('Home', {
		url: '/',
		controller: 'ExampleCtrl as home',
		templateUrl: 'home.html',
		title: 'Home'
	});

	$stateProvider
	.state('User Commitments', {
		url: '/user-commitments/',
		controller: 'UserCommitmentsCtrl',
		templateUrl: 'user-commitments.html',
		title: 'Users Commitments'
	});

	$urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;