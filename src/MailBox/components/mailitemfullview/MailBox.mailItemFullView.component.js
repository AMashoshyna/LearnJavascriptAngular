(function() {
	'use strict';
	angular.module('MailBox')
		.component('mailItemFullView', {
			templateUrl: 'src/MailBox/components/mailitemfullview/mailItemFullView.html',
			bindings: {
				mail: '<'
			},
			controller: MailItemFullViewController
		});


	MailItemFullViewController.$inject = ['MailBoxService', '$state']
	function MailItemFullViewController(MailBoxService, $state) {
		var ctrl = this;
		ctrl.removeMail = removeMail;

		function removeMail(mailId) {
			confirm('Are you sure you want to detele this mail?');
			MailBoxService.removeMail(mailId).then(()=> {
				$state.go('inbox');
		})
		};
	}
})();