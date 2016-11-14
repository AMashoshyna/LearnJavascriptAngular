	(function() {
	'use strict';
	angular.module('MailBox')
	.component('mailbox', {
	  templateUrl: 'src/MailBox/components/mailbox/mailbox.html',
      bindings: {
      	mails: '<'
      },
	  controller: MailBoxController,
	  })

	MailBoxController.$inject = ['MailBoxService'];
	function MailBoxController (MailBoxService) {
	  var $ctrl = this;
	  MailBoxService.mailBoxCreation();


		$ctrl.addMail = function(mail) {

            MailBoxService.newMail(mail);
		};

		$ctrl.saveToDrafts = function(mail) {
			MailBoxService.saveToDrafts(mail);
		};
		
	}
	
	
})();

