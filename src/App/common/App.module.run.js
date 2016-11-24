(function() {
    'use strict';
    angular.module('myApp')
        .run( ['$rootScope', '$state', '$stateParams','AccessControl',
            function ($rootScope,   $state,   $stateParams, AccessControl) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                $rootScope.$on('$stateChangeStart', function(e, toState) {
                    var isLoggedin = toState.name === 'login';
                    var userInfo = AccessControl.checkLogin();
                    if(isLoggedin) {
                        if(userInfo === 'true') {
                            e.preventDefault();
                            $state.go('inbox');
                            return;
                        }
                    }
                    if(userInfo == 'false') {
                        if(isLogggedin) {
                            return;
                        }
                        e.preventDefault();
                        $state.go('login');
                    }
                })
            }
        ])
})();



