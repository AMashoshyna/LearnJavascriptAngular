(function() {
    'use strict';
    angular.module('myApp',['UserData', 'MailBox', 'ui.router'])
        .run( ['$rootScope', '$state', '$stateParams','AccessControl',
            function ($rootScope,   $state,   $stateParams, AccessControl) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
                    var isLogin = toState.name === 'login';
                    var userInfo = AccessControl.checkLogin();
                    if(isLogin) {
                        if(userInfo == 'true') {
                            e.preventDefault();
                            $state.go('inbox');
                            return;
                        }
                    }
                    if(userInfo == 'false') {
                        if(isLogin) {
                            return;
                        }
                        e.preventDefault();
                        $state.go('login');
                    }
                })
            }
        ])
})();



