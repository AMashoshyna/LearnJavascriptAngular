(function() {
	'use strict';
	angular.module('MailBox', ['ui.router'])
	.controller('MailListController', MailListController)
	.controller('MailItemController', MailItemController);


		    MailListController.$inject = ['mails']
		    function MailListController(mails) {
            this.mails = mails;


	      this.showMailItem = function(itemIndex) {
	        this.showMailItemMethod({index: itemIndex})
	      }
	    };

	    MailItemController.$inject = ['mail'];
	    function MailItemController(mail) {
	    	// console.log(mail);
	    	this.mail = mail;
	    }
})();