(function() {
	'use strict';
	angular.module('MailBox')
	.component('mailbox', {
		templateUrl: 'src/MailBox/components/mailbox/mailbox.html',
		bindings: {
			mails: '<'
		},
		controller: MailBoxController
	});

	MailBoxController.$inject = ['MailBoxService'];
	function MailBoxController (MailBoxService) {
		var $ctrl = this;
		$ctrl.addMail = addMail;
		$ctrl.saveToDrafts = saveToDrafts;

		MailBoxService.mailBoxCreation();

		function addMail(mail) {
			MailBoxService.newMail(mail);
		};

		function saveToDrafts(mail) {
			MailBoxService.saveToDrafts(mail);
		};
	}
})();

