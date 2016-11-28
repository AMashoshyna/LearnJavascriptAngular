(function() {
	'use strict';
	angular.module('MailBox')
	.component('draftItems', {
		templateUrl: 'src/MailBox/components/draftitems/draftItems.html',
		controller: DraftItemsComponentController
	});

	DraftItemsComponentController.$inject = ['MailBoxService', '$scope'];
	function DraftItemsComponentController(MailBoxService, $scope) {
		var ctrl = this;
		ctrl.checkAll = checkAll;
		ctrl.data = MailBoxService.data;
		ctrl.deleteMessageMsg = MailBoxService.deleteMessageMsg;
		ctrl.getSelectedDraftsItems = () => MailBoxService.getSelectedDraftsItems();
		ctrl.searchQuery = "";
		ctrl.selectAll = false;
		ctrl.removeMail = removeMail;
		ctrl.removeMultiple = removeMultiple;
		ctrl.showDraftMessage = MailBoxService.showDraftMessage;
		ctrl.showSentMessage = MailBoxService.showSentMessage;

		MailBoxService.getAllMails();

		function checkAll(){
			this.data.drafts.forEach((item)=> {
				item.selected = this.selectAll;
			})
		}

		function removeMail(mail) {
			MailBoxService.removeMail(mail._id)
		};

		function removeMultiple() {
			this.getSelectedDraftsItems().forEach(function(mail){
				MailBoxService.removeMail(mail._id)
			})
		};

		$scope.$on('$stateChangeStart', function() {
			MailBoxService.showDraftMessage.value = false;
			MailBoxService.showSentMessage.value = false;
		})
	}
})();