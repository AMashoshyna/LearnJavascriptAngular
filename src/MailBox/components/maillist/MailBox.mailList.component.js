(function() {
	'use strict';
	angular.module('MailBox')
	.component('mailList', {
		templateUrl: 'src/MailBox/components/maillist/mailList.html',
		controller: MailListComponentController
	});

	MailListComponentController.$inject = ['MailBoxService', '$scope']
	function MailListComponentController(MailBoxService, $scope) {

		this.data = MailBoxService.data;
		this.deleteMessageMsg = MailBoxService.deleteMessageMsg;
		this.searchQuery = "";
		this.checkAll = checkAll;
		this.moveToSpam = moveToSpam;
		this.removeMail = removeMail;
		this.removeMultiple = removeMultiple;
		this.selectAll = false;
		this.showDraftMessage = MailBoxService.showDraftMessage;
		this.showSentMessage = MailBoxService.showSentMessage;
		this.getSelectedInboxItems = getSelectedInboxItems;

		function checkAll() {
			this.data.inbox.forEach((item)=> {
				item.selected = this.selectAll;
			})
		};

		function getSelectedInboxItems() {
			return MailBoxService.getSelectedInboxItems()
		};

		function moveToSpam() {
			this.getSelectedInboxItems().forEach(function(mail){
				MailBoxService.moveToSpam(mail)
			})
		};

		function removeMail(mail) {
			MailBoxService.removeMail(mail._id)
		};

		function removeMultiple() {
			confirm("Are you sure you want to delete selected items?");
			this.getSelectedInboxItems().forEach(function(mail){
				MailBoxService.removeMail(mail._id)
			})
		};

		$scope.$on('$stateChangeStart', function() {
			MailBoxService.showDraftMessage.value = false;
			MailBoxService.showSentMessage.value = false;
		})
	}
})();