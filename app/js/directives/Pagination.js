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
    	showPages : '=showPages',
        searchQuery : "=searchQuery"
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
            console.log("currentPage", $scope.currentPage);
    	});

    	$scope.$watch("totalPages", function(value){
    		$scope.pages = [];

    		var i = 1;
    		var j = $scope.currentPage;

            console.log("VALUE ===>" , value);

    		while(i<$scope.showPages && j <= value){
	    		$scope.pages.push({
	    			number : j++
	    		});
	    		i++;
    		}
    	});

    	$scope.toPage = function(page){
            console.log("SEARCH QUERY ===> ", $scope.searchQuery);

    		$state.go('.', {page: page.number, search : $scope.searchQuery});
    	};

    	$scope.toStart = function(){
    		$state.go('.', {page: 1, search : $scope.searchQuery});
    	};

    	$scope.toEnd = function(){
    		$state.go('.', {page: $scope.totalPages, search : $scope.searchQuery});
    	};

    	$scope.toBack = function(){
    		if($scope.currentPage<=1) return;
    		$state.go('.', {page: --$scope.currentPage, search : $scope.searchQuery}); 
    	};

    	$scope.toNext = function(){
    		if($scope.currentPage>=$scope.totalPages) return;
    		$state.go('.', {page: ++$scope.currentPage, search : $scope.searchQuery});    		
    	};

    }]
  };

}

directivesModule.directive('pagination', pagination);