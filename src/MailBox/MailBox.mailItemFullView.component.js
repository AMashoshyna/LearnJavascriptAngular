	(function() {
		'use strict';
		angular.module('MailBox')
		.component('mailItemFullView', {
			templateUrl: 'src/templates/mailItemFullView.html',
			bindings: {
				mail: '<',
			},
			controller: MailItemFullViewController,
		})


		function MailItemFullViewController(MailBoxService) {
			this. removeMail = function (mailId) {
				MailBoxService.removeMail(mailId)
			}

		}
	})();