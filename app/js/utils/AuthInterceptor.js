angular.module('pdtp.admin.utils')
.factory('AuthInterceptor', ['LocalStorage', '$rootScope', '$q', 'AppSettings',
  function(LocalStorage, $rootScope, $q, AppSettings) {
    return {
     request: function (config) {

       config.headers = config.headers || {};

       if(config.url != (AppSettings.API_URL + '/auth/login/')){
         if(LocalStorage.get('token'))
           config.headers.Authorization = 'Token ' + LocalStorage.get('token');
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
