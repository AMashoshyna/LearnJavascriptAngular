(function() {
	'use strict';
	angular.module('MailBox')
	.component('spamItems', {
		templateUrl: 'src/MailBox/components/spamitems/spamItems.html',
		controller: SpamItemsComponentController
	});

	SpamItemsComponentController.$inject = ['MailBoxService', '$scope'];
	function SpamItemsComponentController(MailBoxService, $scope) {
		var ctrl = this;
		ctrl.checkAll = checkAll;
		ctrl.data = MailBoxService.data;
		ctrl.getSelectedSpamItems = getSelectedSpamItems;
		ctrl.deleteMessageMsg = MailBoxService.deleteMessageMsg;
		ctrl.showDraftMessage = MailBoxService.showDraftMessage;
		ctrl.showSentMessage = MailBoxService.showSentMessage;
		ctrl.removeMail = removeMail;
		ctrl.removeMultiple = removeMultiple;
		ctrl.selectAll = false;

		ctrl.searchQuery = "";
		function removeMail(mail) {
			MailBoxService.removeMail(mail._id)
		};

		function checkAll() {
			this.data.spam.forEach((item)=> {
				item.selected = this.selectAll;
			})
		};

		function getSelectedSpamItems(){
			MailBoxService.getSelectedSpamItems()
		};

		function removeMultiple() {
			this.getSelectedSpamItems().forEach(function(mail){
				MailBoxService.removeMail(mail._id)
			})
		};

		$scope.$on('$stateChangeStart', function() {
			MailBoxService.showDraftMessage.value = false;
			MailBoxService.showSentMessage.value = false;
		})
	};
})();