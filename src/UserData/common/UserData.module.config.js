(function() {
	'use strict';
	angular.module('UserData')
	.config(RouterConfig);

	RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RouterConfig($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('list', {
			url: '/list',
			parent: 'users',
			template: '<user-list></user-list>',
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
					return UserCardService.getUserData();
				}],
				user: ['UserCardService', '$stateParams', function(UserCardService, $stateParams) {
					if($stateParams.userId === null) {
						return undefined;
					} else {
						return UserCardService.getUser($stateParams.userId);
					}
				}]
			},
			controller: ['users','user', function(users, user) {
				this.users = users;
				this.user = (user || users[0]);
			}]
		})
		.state('editprofile', {
			url: '/editprofile:userId',
			parent:'users',
			template: '<edit-profile user="editCtrl.user"></edit-profile>',
			params: {
				userId: null,
			},
			resolve: {
				user: ['UserCardService', '$stateParams', function(UserCardService, $stateParams) {
					return UserCardService.getUser($stateParams.userId);
				}]
			},
			controller: ['user', function(user) {
				this.user = user;
				this.user.birthdate = new Date (Date.parse(user.birthdate));
			}]
		})
		.state('newuser', {
			url: '/newuser',
			parent: 'users',
			template: '<new-user-form></new-user-form>'
		})
	}
})();
