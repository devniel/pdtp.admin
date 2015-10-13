'use strict';

/**
* LoginController
* @namespace pdtp.admin.controllers
*/

angular
.module('pdtp.admin.controllers')
.controller('LoginController', function ($scope, AuthService, $state, APP_EVENTS){

  $scope.data = {};

  $scope.login = function() {

      AuthService.login($scope.data.email, $scope.data.password)
      .success(function(data) {
        $state.go('tab.tournaments', {}, {reload:true});
      })
      .error(function(error) {
          var alertPopup = $ionicPopup.alert({
              title: 'Login failed!',
              template: 'Please check your credentials!'
          });
      });
  };

  $scope.$on(APP_EVENTS.AUTH.AUTHENTICATED, function(event){
    console.log(' - - - ');
    AuthService.logout();
    $state.go('tab.tournaments');
  });

});
