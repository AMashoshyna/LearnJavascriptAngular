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
    this.deleteMessageMsg = MailBoxService.deleteMessageMsg;
		// this.sortType = "";
		this.searchQuery = "";
		this.removeMail = function(mail) {
			MailBoxService.removeMail(mail._id)
		};

		this.getSelectedItems = function() {
			var mails = this.data.inbox;
			var selectedMails = [];
			for (var i = 0; i < mails.length; i++) {
				if(mails[i].selected  ||  mails[i].checked == 'checked') {
					selectedMails.push(mails[i]);
				} else {
					continue;
				}
			}
			return selectedMails
		}

		this.removeMultiple = function() {
			confirm("Are you sure you want to delete selected items?")
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
	this.showSentMessage = MailBoxService.showSentMessage;

	$scope.$on('$stateChangeStart', function() {
		MailBoxService.showDraftMessage.value = false;
		MailBoxService.showSentMessage.value = false;

	})
}
})();