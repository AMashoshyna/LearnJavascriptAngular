(function() {
	'use strict';
	angular.module('MailBox')
	.component('sentItems', {
		templateUrl: 'src/MailBox/sentitems/sentItems.html',
		bindings: {
			mails: '<',
		},
	});

})();