(function() {
	'use strict';
	angular.module('MailBox')
		.component('mailBoxMenu', {
			templateUrl: 'src/MailBox/components/mailbox/mailboxmenu/mailBoxMenu.html',
			controller: MailBoxMenuController
		});

	MailBoxMenuController.$inject = ['MailBoxService', '$state']
	function MailBoxMenuController(MailBoxService, $state) {
		this.data = MailBoxService.data;
		this.$state = $state;
	}
})();