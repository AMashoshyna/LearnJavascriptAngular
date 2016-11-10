(function() {
	'use strict';
	angular.module('MailBox')
	.component('spamItems', {
		templateUrl: 'src/MailBox/spamitems/spamItems.html',
		controller: SpamItemsComponentController
	});

	SpamItemsComponentController.$inject = ['MailBoxService', '$scope'];
	function SpamItemsComponentController(MailBoxService, $scope) {
this.data = MailBoxService.data;
this.deleteMessageMsg = MailBoxService.deleteMessageMsg;
		// this.sortType = "";
		this.searchQuery = "";
		this.removeMail = function(mail) {
			MailBoxService.removeMail(mail._id)
		};

		this.getSelectedItems = function() {
			var mails = this.data.spam;
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
			this.getSelectedItems().forEach(function(mail){
				MailBoxService.removeMail(mail._id)
			})
		}


	this.showDraftMessage = MailBoxService.showDraftMessage;
	this.showSentMessage = MailBoxService.showSentMessage;

	$scope.$on('$stateChangeStart', function() {
		MailBoxService.showDraftMessage.value = false;
		MailBoxService.showSentMessage.value = false;

	})

	};

})();