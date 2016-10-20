(function() {
	'use strict';
	angular.module('MailBox')
	.component('mailList', {
		templateUrl: 'src/templates/mailList.html',
		bindings: {
			mails: '<',
		},
		controller: MailListComponentController
	});

	function MailListComponentController(MailBoxService) {

		this.sortType = "";
		this.removeMail = function(mail) {
			MailBoxService.removeMail(mail._id)
			.then(() => {this.mails.splice(this.mails.indexOf(mail), 1); });
		}
	}
})();