

	(function() {
	'use strict';
	angular.module('MailBox')
		.component('mailBoxMenu', {
	  templateUrl: 'src/templates/mailBoxMenu.html',
	  controller: MailBoxMenuController
	})

MailBoxMenuController.$inject = ['MailBoxService']
function MailBoxMenuController(MailBoxService) {


}

	
})();