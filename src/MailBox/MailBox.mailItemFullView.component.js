	(function() {
		'use strict';
		angular.module('MailBox')
		.component('mailItemFullView', {
			templateUrl: 'src/templates/mailItemFullView.html',
			bindings: {
				mail: '<',
				// removeMail: '&'
			},
			controller: MailItemFullViewController,
		})


		function MailItemFullViewController(MailBoxService) {
			this. removeMail = function (mailId) {
				MailBoxService.removeMail(mailId)
			}

		}
	})();