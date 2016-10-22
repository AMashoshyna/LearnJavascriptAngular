	(function() {
	'use strict';
	angular.module('MailBox')
	.component('mailbox', {
	  template: 
	  `
	     <div class="row">
	     <mail-box-menu></mail-box-menu>
          <ui-view></ui-view>
       </div>
      `,
	  controller: MailBoxController,
	  })

	MailBoxController.$inject = ['MailBoxService'];
	function MailBoxController (MailBoxService) {
	  var $ctrl = this;
	  MailBoxService.mailBoxCreation();


		$ctrl.addMail = function(mail) {

            MailBoxService.newMail(mail);
		}
	    
	    $ctrl.removeMail = function(mailId) {
	    	console.log('mail removal started')
	    	MailBoxService.removeMail(mailIid);
	    }
	}
	
})();

