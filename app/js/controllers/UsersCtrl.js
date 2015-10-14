'use strict';

/**
* UsersCtrl
* @namespace pdtp.admin.controllers
*/

angular
.module('pdtp.admin.controllers')
.controller('UsersCtrl', function ($scope, UsersService, $state, $stateParams){

  $scope.users = [];
  $scope.quantity = 50;
  $scope.page = parseInt($stateParams.page, 10);
  $scope.total = 0;
  $scope.totalPages = 0;
  $scope.query = null;

  $scope.noResults = null;

  $scope.cacheTotal = null;
  $scope.cachePage = null;
  $scope.cacheUsers = null;

  UsersService.count().success(function(response){
    $scope.total = response.data.total;    
    $scope.totalPages = Math.ceil($scope.total/$scope.quantity);
  });

  $scope.loading = null;

  $scope.list = function(page, quantity){
    $scope.loading = UsersService
    .list(page, quantity)
    .success(function(response){
      $scope.users = response.data;
      for(var i in $scope.users)
        $scope.users[i].fecha_creacion = new Date($scope.users[i].fecha_creacion);
    })
    .error(function(err){
      console.error(err);
    });
  };

  $scope.list($scope.page, $scope.quantity);

  // Search Query

  $scope.$watch("query", function(query){

    if(query != null){
      if(query.length == 0){
        $scope.noResults = false;
        $scope.total = $scope.cacheTotal;
        $scope.page = $scope.cachePage;
        $scope.users = $scope.cacheMembers;
      }
    }

    if(query != null && query != undefined && query.length > 0){

      $scope.users = [];
      $scope.total = 0;
      $scope.page = 1;

      $scope.noResults = false;

      UsersService.search(query).success(function(response){

        if(response.results.length == 0)
          $scope.noResults = true;
        else
           $scope.noResults = false;

        $scope.members = response.results;
        $scope.total = response.results.length;
        $scope.page = 1;

        $scope.users = response.results;

        for(var i in $scope.users)
          $scope.users[i].fecha_creacion = new Date($scope.users[i].fecha_creacion);

      }).error(function(err){
        console.error(err);
      });
    }

  });




});
