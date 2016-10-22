(function() {
	'use strict';

	angular.module('MailBox')
	.config(RouterConfig)

RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouterConfig($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('inbox', {
		url: '/inbox',
		parent:'mails',
		template: `

          <mail-list mails="MailListController.mails"
           </mail-list>
        `,
        params: {
        	mailId: null,
        	// removeMail: null,

        },
        resolve: {
        	mails: ['MailBoxService', function(MailBoxService) {
        		return MailBoxService.getAllMails();
        	}]
        },
        controller: 'MailListController as MailListController'
	})

	.state('newmail', {
		url: '/newmail',
		parent:'mails',
		template: 
		`
        <new-mail add-mail="$ctrl.addMail(mail)"></new-mail>`
	})

	.state('mailfullview', {
		url: '/mailfullview/:mailId' ,
		parent:'mails',
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
	.state('sent', {
		template: '<div class="panel panel-info"><h4>Your mail has been sent.</h4></div>',
		url: '/sent',
		parent:'mails',
	})
	.state('folders', {
		url:  '/folders',
		parent:'mails',
		template: '<mail-folders folders = "foldersCtrl.folders"></mail-folders>',
		resolve: {
			folders: ['MailBoxService', function(MailBoxService) {
				return MailBoxService.getFolders()

			}]
		},
		controller: 'MailFoldersController as foldersCtrl'
	})
}
})();