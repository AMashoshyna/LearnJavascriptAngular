(function() {
	'use strict';
	angular.module('MailBox', ['ui.router'])
	 .constant('apiPath', '//test-api.javascript.ru/v1/amashoshyna')

	.run(function ($state,$rootScope) {
    $rootScope.$state = $state;
})

	// route controllers
	.controller('MailListController', MailListController)
	.controller('MailItemController', MailItemController)
	.controller('MailFoldersController', MailFoldersController)
	.controller('SentItemsController', SentItemsController)
	.controller('DraftsItemsController', DraftsItemsController)
	.controller('SpamItemsController', SpamItemsController)


	MailListController.$inject = ['mails']
	function MailListController(mails) {
		this.mails = mails;
	};

	MailItemController.$inject = ['mail'];
	function MailItemController(mail) {
		this.mail = mail;
	};

	MailFoldersController.$inject =['folders'];
	function MailFoldersController(folders) {
		this.folders = folders;
	};

	SentItemsController.$inject = ['mails'];
	function SentItemsController(mails) {
		this.mails = mails;
	};

	DraftsItemsController.$inject = [];
	function DraftsItemsController() {
	};

	SpamItemsController.$inject = [];
	function SpamItemsController() {

	}
})();