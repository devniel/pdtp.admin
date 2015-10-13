'use strict';

angular.module('pdtp.admin.utils')
.factory('AuthInterceptor', ['$cookies', '$rootScope', '$q', 'AppSettings',
  function($cookies, $rootScope, $q, AppSettings) {
    return {
     request: function (config) {

       config.headers = config.headers || {};

       if(config.url != (AppSettings.API_URL + '/auth/login/')){
         if($cookies.get("token"))
           config.headers.Authorization = 'Bearer ' + $cookies.get("token");
       }

       return config;
     },
     response: function (response) {
       if (response.status === 401) {
         console.log('not authorized');
       }
       return response || $q.when(response);
     }
    };
}]);
