'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('angular-busy/dist/angular-busy.min.js');
require('angular-cookies');
require('./templates');
require('./utils/_index');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'cgBusy',
    'ngCookies',
    'ngFileUpload',
    'templates',
    'pdtp.admin.utils',
    'pdtp.admin.controllers',
    'pdtp.admin.services',
    'pdtp.admin.directives'
  ];

  // mount on window for testing
  window.app = angular.module('pdtp.admin', requires);

  angular.module('pdtp.admin').constant('AppSettings', require('./constants'));

  angular.module('pdtp.admin').config(require('./on_config'));

  angular.module('pdtp.admin').run(require('./on_run'));

  angular.bootstrap(document, ['pdtp.admin']);

});