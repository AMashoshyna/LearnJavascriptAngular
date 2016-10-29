

	(function() {
	'use strict';
	angular.module('MailBox')
		.component('mailBoxMenu', {
	  templateUrl: 'src/MailBox/mailbox/mailboxmenu/mailBoxMenu.html',
	  controller: MailBoxMenuController,
	  bindings: {
	  	mails: '<'
	  }
	})

MailBoxMenuController.$inject = ['MailBoxService', '$state']
function MailBoxMenuController(MailBoxService, $state) {

	// to be checked later(mails object includes mails property)
	this.$state = $state;
	this.length = this.mails.mails.length;


}

	
})();