'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function user() {
  return {
    restrict: 'EA',
    scope : {
    	user : '=data'
    },
    template : require("./../../templates/User.html"),
    link: function(scope, element) {
      element.on('click', function() {
        console.log('element clicked');
      });
    }
  };

}

directivesModule.directive('user', user);