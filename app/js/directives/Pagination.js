'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function pagination() {
  return {
    restrict: 'EA',
    scope : {
    	currentPage : '=currentPage',
    	totalPages : '=totalPages',
    	showPages : '=showPages'
    },
    template : require("./../../templates/Pagination.html"),
    link: function($scope, element) {
      element.on('click', function() {
        console.log('element clicked');
      });
    },
    controller : ['$scope' , '$state' , function($scope, $state){

    	$scope.$watch("currentPage", function(value){ 
    		$scope.currentPage = value;
    	});

    	$scope.$watch("totalPages", function(value){
    		$scope.pages = [];

    		var i = 1;
    		var j = $scope.currentPage;

    		while(i<$scope.showPages){
	    		$scope.pages.push({
	    			number : j++,
	    			selected : false
	    		});
	    		i++;
    		}
    	});

    	$scope.toPage = function(page){
    		$state.go('.', {page: page.number});
    	};

    	$scope.toStart = function(){
    		$state.go('.', {page: 1});
    	};

    	$scope.toEnd = function(){
    		$state.go('.', {page: $scope.totalPages});
    	};

    	$scope.toBack = function(){
    		if($scope.currentPage<=1) return;
    		$state.go('.', {page: --$scope.currentPage}); 
    	};

    	$scope.toNext = function(){
    		if($scope.currentPage>=$scope.totalPages) return;
    		$state.go('.', {page: ++$scope.currentPage});    		
    	};

    }]
  };

}

directivesModule.directive('pagination', pagination);