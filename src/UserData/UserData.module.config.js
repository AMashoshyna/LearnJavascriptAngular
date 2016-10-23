(function() {
	'use strict';
angular.module('UserData')
.config(RouterConfig);


RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouterConfig($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('list');


	 $stateProvider
	 .state('list', {
	 	url: '/list',
	 	parent: 'users',
	 	template: '<user-list></user-list>',

	 })

	 .state('userdetail', {
	 	url: '/userdetail:userId',
	 	parent: 'start',
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
	 			return UserCardService.getUser($stateParams.userId);
	 		}]
	 	},
	 	controller: 'UserDetailController as userdetailCtrl'

	 })

	 .state('newuser', {
	 	url: '/newuser',
	 	parent: 'users',

	 })
}
})();
