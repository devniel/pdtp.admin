// @devniel
// This provider will create a service called LocalStorage.
// According to AngularJS documentation https://docs.angularjs.org/guide/providers
// the name of the provider will be 'LocalStorageProvider' that will be accessible
// from the config block of some modules such as the one located on proamtennnis.routes.js

/**
* https://docs.angularjs.org/guide/module
* Read 'Module Loading & Dependencies' part.
*/

angular.module('pdtp.admin.utils')
.provider('LocalStorage', function() {
    this.$get = function($window) {
      return {
        set: function(key, value) {
          $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
          return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
          $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
          return JSON.parse($window.localStorage[key] || '{}');
        }
      }
    }
});
