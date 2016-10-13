	(function() {
		'use strict';
		angular.module('MailBox')
		.component('mailItemFullView', {
			templateUrl: 'src/templates/mailItemFullView.html',
			bindings: {
				mails: '<',
				index: '<'
			},

		})

	})();