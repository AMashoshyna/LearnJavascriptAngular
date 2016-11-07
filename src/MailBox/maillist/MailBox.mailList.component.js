(function() {
	'use strict';
	angular.module('MailBox')
	.component('mailList', {
		templateUrl: 'src/MailBox/maillist/mailList.html',
		controller: MailListComponentController,
		bindings: {
			showSavedMessage: '<'
		}
	});


    MailListComponentController.$inject = ['MailBoxService', '$scope']
	function MailListComponentController(MailBoxService, $scope) {

    this.data = MailBoxService.data;
		// this.sortType = "";
		this.searchQuery = "";
		this.removeMail = function(mail) {
			MailBoxService.removeMail(mail._id)
		};

		this.getSelectedItems = function() {
			var mails = this.data.inbox;
			var selectedMails = [];
			for (var i = 0; i < mails.length; i++) {
				if(mails[i].selected == true) {
					selectedMails.push(mails[i]);
				} else {
					continue;
				}
			}
			return selectedMails
		}

		this.removeMultiple = function() {
			this.getSelectedItems().forEach(function(mail){
				MailBoxService.removeMail(mail._id)
			})
		}

		this.moveToSpam = function() {
			this.getSelectedItems().forEach(function(mail){
			MailBoxService.moveToSpam(mail)
		})
	};

	this.showDraftMessage = MailBoxService.showDraftMessage;
	$scope.$on('$stateChangeStart', function() {
		console.log(this);
		this.showDraftMessage = false;

	})
}
})();