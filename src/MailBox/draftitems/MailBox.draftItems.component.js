(function() {
	'use strict';
	angular.module('MailBox')
	.component('draftItems', {
		templateUrl: 'src/MailBox/draftitems/draftItems.html',
		bindings: {
			mails: '<',
		},
	});

})();