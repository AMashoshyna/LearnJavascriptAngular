(function() {
	'use strict';
	angular.module('MailBox')
		.component('mailItemFullView', {
			templateUrl: 'src/MailBox/components/mailitemfullview/mailItemFullView.html',
			bindings: {
				mail: '<',
			},
			controller: MailItemFullViewController
		})


	MailItemFullViewController.$inject = ['MailBoxService', '$state']
	function MailItemFullViewController(MailBoxService, $state) {
		this.removeMail = function (mailId) {
			MailBoxService.removeMail(mailId).then(()=> {
				$state.go('inbox');
		})
		}
	}
})();