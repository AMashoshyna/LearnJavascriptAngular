(function() {
	'use strict';
	angular.module('myApp')
	.config(RouterConfig)

RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RouterConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/login');

		$stateProvider
		.state('start', {
			// url: '/',
			template: `<wrapper-element></wrapper-element>`
		})
		.state('login', {
			url: '/login',
			// parent: 'start',
			template: `<login username = "ctrl.username" email = "ctrl.email" password = "ctrl.password"></login>`,
			controller: 'LoginController as ctrl'

		})
		.state('success', {
			template:`<div class="greeting-container">
			<div class="alert alert-info">Welcome back, <b>{{success.username}}</b>! 
			Redirecting...</div>
			</div>`,
			parent: 'start',
			 params: {
        email: null,
        password: null
                },
                controller: 'SuccessController as success',
      onEnter: function($state, $timeout) {
      $timeout(()=>{$state.go('mails.inbox')},3000)
      
    },
      resolve: {
        access: ['AccessControl', '$stateParams', function(AccessControl, $stateParams) {
          return AccessControl.checkUser($stateParams.email, $stateParams.password)
          .then(response=> response.data);
        }],
        username: ['AccessControl', function(AccessControl) {
        	return AccessControl.getCurrentUser().username

        }]
    },
		})
		.state('login.failure', {
			template: ``
		})
		.state('users', {
			url: '/users',
			parent:'start',
			template: ` <user-list></user-list> `
		})

		.state('mails', {
			abstract: true,
			parent:'start',
			template: `<mailbox></mailbox>`
		})

	}
})();