(function() {
	'use strict';
	angular.module('MailBox')
	.component('mailList', {
		templateUrl: 'src/templates/mailList.html',
		bindings: {
			mails: '<',
			removeMail: '&'
		},
		controller: MailListComponentController
	});

	function MailListComponentController(MailBoxService) {

		this.sortType = "";
		this.removeMail = function(mail) {
			MailBoxService.removeMail(mail)
			.then(() => this.mails.splice(this.mails.indexOf(mail), 1));
		}
	}
})();