(function() {
	'use strict';
	angular.module('MailBox')
	.component('mailList', {
		templateUrl: 'src/templates/mailList.html',
		bindings: {
			mails: '<',
			showMailItemMethod: '&showMailItem',
			test: '&'
		},
		controller: MailListController
	})

		    function MailListController() {
	      this.showMailItem = function(itemIndex) {
	        this.showMailItemMethod({index: itemIndex})
	      }
	    }
	
})();