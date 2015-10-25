/**
* UserCommitmentsService
* @namespace pdtp.admin.services
* based on : http://devdactic.com/user-auth-angularjs-ionic/
*/

angular
  .module('pdtp.admin.services')
  .service('UserCommitmentsService', function($http, $q, AppSettings) {

    /**
    * LIST
    */
    var list = function(page, quantity){

      // @devniel
      // deferred and promise mode
      // for learning reasons
      // becasue $http.post return already
      // a promise

      var deferred = $q.defer();

      return $http.get(AppSettings.API_V3_URL + '/users-commitments/list?page=' + page + '&quantity=' + quantity, {})
      .success(function(response){
        deferred.resolve(response);
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
    * COUNT
    */
    var count = function(query){

      var deferred = $q.defer();

      var query = query || '';

      console.log("QUERY ===> ", query);

      return $http.get(AppSettings.API_V3_URL + '/users-commitments/count?query=' + query, {})
      .success(function(response){
        deferred.resolve(response);
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
    }

    /**
    * SEARCH
    */
    var search = function(query, page, quantity){

      var deferred = $q.defer();

      return $http.get(AppSettings.API_V3_URL + '/users-commitments/search?query=' + query + "&page=" + page + "&quantity=" + quantity , {})
      .success(function(response){
        deferred.resolve(response);
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
    }

    return {
      list : list,
      count : count,
      search : search
    }

  });
