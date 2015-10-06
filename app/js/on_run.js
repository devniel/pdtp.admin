'use strict';

/**
 * @ngInject
 */
function OnRun($rootScope, AuthService, $state, AppSettings) {

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    $rootScope.pageTitle = '';

    if ( toState.title ) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.APP_TITLE;
  });


  // Review : http://devdactic.com/user-auth-angularjs-ionic/
  // This stateChangeStart will be called each time
  // that the app change its state with $state.go()

  $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState){
    if(!AuthService.isAuthenticated()){
      if(next.name !== 'login'){
        event.preventDefault();
        $state.go("login");
      };
    };
  });

}

module.exports = OnRun;