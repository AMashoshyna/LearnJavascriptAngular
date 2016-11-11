(function() {
	'use strict';
	angular.module('MailBox')
	.component('draftItems', {
		templateUrl: 'src/MailBox/draftitems/draftItems.html',
		bindings: {
			mails: '<',
		},
		controller: DraftItemsComponentController
	});

	DraftItemsComponentController.$inject = ['MailBoxService', '$scope'];
	function DraftItemsComponentController(MailBoxService, $scope) {
		MailBoxService.getAllMails();
this.data = MailBoxService.data;

this.deleteMessageMsg = MailBoxService.deleteMessageMsg;
		this.searchQuery = "";
		this.removeMail = function(mail) {
			MailBoxService.removeMail(mail._id)
		};

		this.getSelectedItems = function() {
			var mails = this.data.drafts;
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