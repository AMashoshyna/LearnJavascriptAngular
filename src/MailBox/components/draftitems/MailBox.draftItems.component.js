(function() {
	'use strict';
	angular.module('MailBox')
		.component('draftItems', {
			templateUrl: 'src/MailBox/components/draftitems/draftItems.html',
			controller: DraftItemsComponentController
		});

	DraftItemsComponentController.$inject = ['MailBoxService', '$scope'];
	function DraftItemsComponentController(MailBoxService, $scope) {
		MailBoxService.getAllMails();
		this.data = MailBoxService.data;
		this.selectAll = false;

		this.deleteMessageMsg = MailBoxService.deleteMessageMsg;
		this.searchQuery = "";
		this.removeMail = function(mail) {
			MailBoxService.removeMail(mail._id)
		};

		this.checkAll = ()=> {
			this.data.drafts.forEach((item)=> {
				item.selected = this.selectAll;
		})
		}

		this.removeMultiple = function() {
			this.getSelectedItems().forEach(function(mail){
				MailBoxService.removeMail(mail._id)
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