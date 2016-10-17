(function() {
	'use strict';

	angular.module('MailBox')
	.config(RouterConfig)

RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouterConfig($stateProvider, $urlRouterProvider) {
	// $urlRouterProvider.otherwise('/');


	$stateProvider
	.state('mails.inbox', {
		url: '/inbox',
		template: `
		        <div id="detail-view" class="detail-view col-sm-10">
          <mail-list mails="MailListController.mails" 
          removeMail="MailListController.removeMail()" show-mail-item="$ctrl.showMailItem(index)">
          </mail-list>
        </div>
        `,
        params: {
        	mailId: null,
        	removeMail: null,

        },
        resolve: {
        	mails: ['MailBoxService', function(MailBoxService) {
        		return MailBoxService.getAllMails();
        	}]
        },
        controller: 'MailListController as MailListController'
	})

	.state('mails.newmail', {
		url: '/newmail',
		template: 
		`
       <div id="detail-view" class="detail-view col-sm-10">
        <new-mail add-mail="$ctrl.addMail(mail)"></new-mail>
        </div>`,
	})

	.state('mails.mailFullView', {
		url: '/mailfullview/:mailId' ,
		template: `<mail-item-full-view  mail="mailCtrl.mail"
		removeMail="mailCtrl.removeMail({mailId: mailCtrl.mailId})"></mail-item-full-view`,
		params: {
			index: null,
			mailId: null,
			removeMail: null,
			// removeMail: $ctrl.removeMail,

		},
		resolve: {
   	mail: ['$stateParams', 'MailBoxService', 
   	function($stateParams, MailBoxService) {
   		return MailBoxService.getMail($stateParams.mailId);
   	}]
   },
   controller: 'MailItemController as mailCtrl'
	})
	.state('mails.sent', {
		template: '<h4>Your mail has been sent.</h4>',
		url: '/sent'
	})
}
})();