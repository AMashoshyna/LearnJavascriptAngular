(function() {
	'use strict';
	angular.module('MailBox')
	.component('draftItems', {
		templateUrl: 'src/MailBox/draftitems/draftItems.html',
		bindings: {
			mails: '<',
		},
		controller: DraftItemsComponentController
	});

	DraftItemsComponentController.$inject = ['MailBoxService'];
	function DraftItemsComponentController(MailBoxService) {
		MailBoxService.getAllMails();
this.data = MailBoxService.data;
	};

})();