(function() {
	'use strict';
	angular.module('MailBox')
	.component('sentItems', {
		templateUrl: 'src/templates/sentItems.html',
		bindings: {
			mails: '<',
		},
	});

})();