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

			<mail-list show-saved-message = "MailListController.showSavedMessage">
			</mail-list>
			`,
			params: {
				mailId: null,
        },
        controller: 'MailListController as MailListController',
    })

		.state('newmail', {
			url: '/newmail:?useremail',
			parent:'mails',
			params: {
				useremail: null,
			},
			template: 
			`
			<new-mail add-mail="$ctrl.addMail(mail)" save-to-drafts="$ctrl.saveToDrafts(mail)"></new-mail>`
		})

		.state('mailfullview', {
			url: '/mailfullview/:mailId' ,
			parent:'mails',
			template: `<mail-item-full-view  mail="mailCtrl.mail"></mail-item-full-view`,
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
		.state('sentreport', {
			template: '<div class="panel panel-info"><h4>Your mail has been sent.</h4></div>',
			url: '/mailsent',
			parent:'mails',
			onEnter: function($state, $timeout) {
				$timeout(()=>{$state.go('inbox')},2000)

			},
		})
		.state('draftsaved', {
			template: '<div class="panel panel-info"><h4>Your draft has been saved.</h4></div>',
			url: '/draftsaved',
			parent:'mails',
			onEnter: function($state, $timeout) {
				$timeout(()=>{$state.go('inbox')},2000)

			},
		})
		.state('drafts', {
			url: '/drafts',
			parent: 'mails',
			template: '<draft-items removeMail = "$ctrl.removeMail(mail)" mails = draftCtrl.mails></drafts-items>',
			controller: 'DraftsItemsController as draftCtrl'

		})
		.state('spam', {
			url: '/spam',
			parent: 'mails',
			template: '<spam-items></spam-items>',
			controller: 'SpamItemsController as spamCtrl'

		})
		.state('sent', {
			url: '/sent',
			parent: 'mails',
			template: '<sent-items mails = sentCtrl.mails></sent-items>',
			resolve: {
				mails: ['MailBoxService', function(MailBoxService) {
					return MailBoxService.getAllMails()
					.then((response) => {return response.filter((item) => {return item.mailbox === '580c8cc99de15a250410dbbf'})});
				}]
			},
			controller: 'SentItemsController as sentCtrl'

		})
		.state('folders', {
			url:  '/folders',
			parent:'mails',
			template: '<mail-folders folders = "foldersCtrl.folders"></mail-folders>',
			resolve: {
				folders: ['MailBoxService', function(MailBoxService) {
					return MailBoxService.getFolders().then((folders) => {
						folders.forEach(function(folder) {
							if(folder.title.toLowerCase() === 'inbox'
								|| folder.title === 'sent' 
								|| folder.title === 'drafts' 
								|| folder.title ==='spam'
								) 
							{  
								folder.removeable = false;
								folder.priority = 1;

						} else {
							folder.removeable = true;
							folder.priority = 2;
						}
					});
						return folders;
					})

				}]
			},
			controller: 'MailFoldersController as foldersCtrl'
		})
	}
})();