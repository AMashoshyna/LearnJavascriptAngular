(function() {
	'use strict';
	angular.module('MailBox', ['ui.router'])

	.run(function ($state,$rootScope) {
    $rootScope.$state = $state;
})

	// route controllers
	.controller('MailListController', MailListController)
	.controller('MailItemController', MailItemController)
	.controller('MailFoldersController', MailFoldersController)
	.controller('SentItemsController', SentItemsController)
	.controller('DraftsItemsController', DraftsItemsController)


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

	DraftsItemsController.$inject = ['mails'];
	function DraftsItemsController(mails) {
		this.mails = mails;
	}

})();