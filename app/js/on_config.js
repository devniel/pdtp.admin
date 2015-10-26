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
		controller: 'AppCtrl as home',
		templateUrl: 'home.html',
		title: 'Home'
	})
	.state('Users', {
		url: '/admin/users?page&search',
		controller: 'UsersCtrl',
		templateUrl: 'users.html',
		title: 'Users',
		params : {
			page : {
				value : '1',
				squash : true
			},
			search : {
				value : null,
				squash : true
			}
		}

	});

	$stateProvider
	.state('User Commitments', {
		url: '/admin/user-commitments?page&search',
		controller: 'UserCommitmentsCtrl',
		templateUrl: 'user-commitments.html',
		title: 'Users Commitments',
		params : {
			page : {
				value : '1',
				squash : true
			},
			search : {
				value : null,
				squash : true
			}
		}
	});

	$stateProvider
	.state('Commitment Photos', {
		url: '/admin/commitment-photos?page&search',
		controller: 'CommitmentPhotosCtrl',
		templateUrl: 'commitment-photos.html',
		title: 'Commitment Photos',
		params : {
			page : {
				value : '1',
				squash : true
			},
			search : {
				value : null,
				squash : true
			}
		}
	});

	$stateProvider
	.state('Institutions', {
		url: '/admin/institutions?page&search',
		controller: 'InstitutionsCtrl',
		templateUrl: 'institutions.html',
		title: 'Institutions',
		params : {
			page : {
				value : '1',
				squash : true
			},
			search : {
				value : null,
				squash : true
			}
		}
	});

	$stateProvider
	.state('Commitments', {
		url: '/admin/commitments?page&search',
		controller: 'CommitmentsCtrl',
		templateUrl: 'commitments.html',
		title: 'Commitments',
		params : {
			page : {
				value : '1',
				squash : true
			},
			search : {
				value : null,
				squash : true
			}
		}
	});

	$stateProvider
	.state('Import User Commitments', {
		url: '/admin/import/user-commitments',
		controller: 'ImportUserCommitmentsCtrl',
		templateUrl: 'import-user-commitments.html',
		title: 'Import User Commitments'
	});


	$urlRouterProvider.otherwise('/admin/users');

}

module.exports = OnConfig;