(function() {
    'use strict';
    angular.module('Routing')
        .config(RouterAppConfig);

    RouterAppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterAppConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('start', {
                template: '<wrapper-element></wrapper-element>'
            })
            .state('login', {
                url: '/login',
                template: '<login></login>'
            })
            .state('success', {
                template: '<welcome username="$ctrl.username"></welcome>',
                parent: 'start',
                params: {
                    email: null,
                    password: null
                },
                controller: ['username', function(username) {
                    this.username = username;
                }],
                onEnter: function($state, $timeout) {
                    $timeout(()=>{$state.go('inbox')}, 3000)
                },
                resolve: {
                    username: ['AccessControl', function(AccessControl) {
                        return AccessControl.getCurrentUser().username
                    }]
                }
            })
            .state('users', {
                abstract: true,
                parent:'start',
                template: `<user-list-preview></user-list-preview><ui-view><loading-spinner></loading-spinner></ui-view>`,
                controller: ['UserCardService', function(UserCardService) {
                    UserCardService.getAllUsers();
                }]
            })
            .state('mails', {
                abstract: true,
                parent:'start',
                template: `<mailbox></mailbox>`,
                controller: ['MailBoxService', function(MailBoxService) {
                    MailBoxService.getAllMails();
                }]
            })
    }
})();