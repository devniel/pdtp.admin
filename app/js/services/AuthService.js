/**
* AuthService
* @namespace proamtennis.admin.services
* based on : http://devdactic.com/user-auth-angularjs-ionic/
*/

angular
  .module('pdtp.admin.services')
  .service('AuthService', function($http, $q, LocalStorage, AppSettings) {

    var user = null;

    var login = function(email, password){

      // @devniel
      // deferred and promise mode
      // for learning reasons
      // becasue $http.post return already
      // a promise

      var deferred = $q.defer();

      $http.post(AppSettings.API_URL + '/auth/login/', {
        email : email,
        password : password
      })
      .success(function(response){
        var data = response.data;
        user = data.user;
        LocalStorage.set('token', data.token);
        LocalStorage.setObject('user', data.user);
        deferred.resolve(response.data);
      })
      .error(function(error){
        deferred.reject(error);
      });

      var promise = deferred.promise;

      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      };

      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      };

      return promise;
    };

    var destroyAuthenticationData = function(){
      LocalStorage.set('token', null);
      LocalStorage.setObject('user', null);
    };

    var loadAuthenticationData = function(){
      if(LocalStorage.getObject('user')){
          user = LocalStorage.getObject('user');
      }else{
        destroyAuthenticationData();
      }
    };

    var logout = function(callback){
      destroyAuthenticationData();
      callback();
    };

    // This function will be called each time that this
    // function is called. It's important because we
    // load the data storage in the localStorage feature
    // of the app.
    loadAuthenticationData();

    return {
      user : user,
      isAuthenticated : function(){
        // Check scope of vanilla JS again.
        // The variable 'user' in the returned
        // object will save a memory address.
        if(user == null)
          return false;
        return true;
      },
      login : login,
      logout : logout
    }

  });
