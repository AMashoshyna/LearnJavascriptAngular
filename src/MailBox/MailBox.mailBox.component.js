	(function() {
	'use strict';
	angular.module('MailBox')
	.component('mailbox', {
	  template: 
	  `
	     <div class="row">
	     <div class="categories col-sm-2">
	     <mail-box-menu></mail-box-menu>
	     </div>
	     <div class="categories col-sm-10">

          <ui-view></ui-view>
          </div>
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

