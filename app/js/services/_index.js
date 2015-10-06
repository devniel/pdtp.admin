'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('pdtp.admin.services', []);

bulk(__dirname, ['./!(*_index|*.spec).js']);