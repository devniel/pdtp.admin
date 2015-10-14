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
		url: '/admin/',
		controller: 'ExampleCtrl as home',
		templateUrl: 'home.html',
		title: 'Home'
	})
	.state('Users', {
		url: '/admin/users?page',
		controller: 'UsersCtrl',
		templateUrl: 'users.html',
		title: 'Home',
		params : {
			page : {
				value : '1',
				squash : true
			}
		}

	});

	$stateProvider
	.state('User Commitments', {
		url: '/admin/user-commitments/',
		controller: 'UserCommitmentsCtrl',
		templateUrl: 'user-commitments.html',
		title: 'Users Commitments'
	});

	$urlRouterProvider.otherwise('/admin/users');

}

module.exports = OnConfig;