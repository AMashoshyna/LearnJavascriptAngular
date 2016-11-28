(function() {
    'use strict';
    angular.module('Routing')
        .config(RouterUserDataConfig);

    RouterUserDataConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterUserDataConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('list', {
                url: '/list',
                parent: 'users',
                template: '<user-list></user-list>'
            })
            .state('userdetail', {
                url: '/userdetail:userId',
                parent: 'users',
                template: `<profile users="userdetailCtrl.users"
			user="userdetailCtrl.user"></profile>`,
                params:{
                    userId: null,
                },
                resolve: {
                    users: ['UserCardService', function(UserCardService) {
                        return UserCardService.getAllUsers();
                    }],
                    user: ['UserCardService', '$stateParams', function(UserCardService, $stateParams) {
                        if($stateParams.userId === null) {
                            return undefined;
                        } else {
                            return UserCardService.getOneUser($stateParams.userId);
                        }
                    }]
                },
                controller: ['users','user', function(users, user) {
                    this.users = users;
                    this.user = (user || users[0]);
                }],
                controllerAs: 'userdetailCtrl'
            })
            .state('editprofile', {
                url: '/editprofile:userId',
                parent:'users',
                template: '<edit-profile user="editCtrl.user"></edit-profile>',
                params: {
                    userId: null
                },
                resolve: {
                    user: ['UserCardService', '$stateParams', function(UserCardService, $stateParams) {
                        return UserCardService.getOneUser($stateParams.userId);
                    }]
                },
                controller: ['user', function(user) {
                    this.user = user;
                    this.user.birthdate = new Date (Date.parse(user.birthdate));
                }],
                controllerAs: 'editCtrl'
            })
            .state('newuser', {
                url: '/newuser',
                parent: 'users',
                template: '<new-user-form></new-user-form>'
            })
    }
})();
