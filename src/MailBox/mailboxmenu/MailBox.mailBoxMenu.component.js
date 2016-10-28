

	(function() {
	'use strict';
	angular.module('MailBox')
		.component('mailBoxMenu', {
	  templateUrl: 'src/MailBox/mailboxmenu/mailBoxMenu.html',
	  controller: MailBoxMenuController
	})

MailBoxMenuController.$inject = ['MailBoxService']
function MailBoxMenuController(MailBoxService) {


}

	
})();