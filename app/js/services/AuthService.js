/**
* AuthService
* @namespace pdtp.admin.services
* based on : http://devdactic.com/user-auth-angularjs-ionic/
*/

angular
  .module('pdtp.admin.services')
  .service('AuthService', function($http, $q, $cookies, AppSettings) {

    var user = null;
    var token = null;

    /**
    * User Login
    * @param {Object} params
    * @param {String} params.username
    * @param {String} params.password
    */
    var login = function(params){

      // @devniel
      // deferred and promise mode
      // for learning reasons
      // becasue $http.post return already
      // a promise

      var deferred = $q.defer();

      // First login with v1 endpoint, then
      // get the token with v2 endpoint.

      $http.post(AppSettings.API_URL + '/auth/login/', {
        username : params.email,
        password : params.password
      })
      .success(function(response){
        // User data loaded in session. Get token
        var data = response.data;
        user = data.user;
        $cookies.put('token', data.token);
        $cookies.putObject('user', data.user);
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

    /**
    * FB Login
    * @param {Object} params
    * @param {String} params.accessToken
    */
    var fbLogin = function(params){

      // @devniel
      // deferred and promise mode
      // for learning reasons
      // becasue $http.post return already
      // a promise

      var deferred = $q.defer();

      // First login with v1 facebook endpoint, then
      // get the token with v2 login endpoint.

      $http.post(AppSettings.API_URL + '/auth/facebookAuth', {
        accessToken : params.accessToken
      })
      .success(function(response){
          var data = response.data;
          user = data.user;
          $cookies.put('token', data.token);
          $cookies.putObject('user', data.user);
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
      $cookies.remove('token');
      $cookies.remove('user');
    };

    var loadAuthenticationData = function(){
      try{
        if($cookies.getObject('user')){
            user = $cookies.getObject('user');
            token = $cookies.get('token');
        }else{
          destroyAuthenticationData();
        }
      }catch(e){
        console.error(e);
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
      logout : logout,
      fbLogin : fbLogin
    }

  });
