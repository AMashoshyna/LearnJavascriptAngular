(function() {
	'use strict';
	angular.module('MailBox')
	.component('spamItems', {
		templateUrl: 'src/MailBox/spamitems/spamItems.html',
		bindings: {
			mails: '<',
		},
		controller: SpamItemsComponentController
	});

	SpamItemsComponentController.$inject = ['MailBoxService'];
	function SpamItemsComponentController(MailBoxService) {
this.data = MailBoxService.data;
	};

})();