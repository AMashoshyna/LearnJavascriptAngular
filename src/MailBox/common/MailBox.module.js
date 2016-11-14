(function() {
	'use strict';
	angular.module('MailBox', ['ui.router'])
	 .constant('apiPath', '//test-api.javascript.ru/v1/amashoshyna')

	.run(function ($state,$rootScope) {
    $rootScope.$state = $state;
})
})();