(function() {
	'use strict';
	angular.module('MailBox', ['ui.router', 'Routing'])
		.constant('apiPath', '//test-api.javascript.ru/v1/amashoshyna')
		.run(function ($state, $rootScope) {
			$rootScope.$state = $state;
		})
})();