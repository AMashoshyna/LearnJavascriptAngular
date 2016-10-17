(function() {
	'use strict';
	angular.module('myApp')
	.config(RouterConfig)

RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RouterConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/users');

		$stateProvider
		.state('users', {
			url: '/users',
			template: ` <user-list></user-list> `
		})

		.state('mails', {
			abstract: true,
			// url: '/mails',
			template: `<mailbox></mailbox>`
		})

	}
})();