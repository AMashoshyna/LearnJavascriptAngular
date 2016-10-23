(function() {
	'use strict';
	angular.module('MailBox')
	.component('draftItems', {
		templateUrl: 'src/templates/draftItems.html',
		bindings: {
			mails: '<',
		},
	});

})();