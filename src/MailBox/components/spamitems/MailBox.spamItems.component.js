(function() {
	'use strict';
	angular.module('MailBox')
		.component('spamItems', {
			templateUrl: 'src/MailBox/components/spamitems/spamItems.html',
			controller: SpamItemsComponentController
		});

	SpamItemsComponentController.$inject = ['MailBoxService', '$scope'];
	function SpamItemsComponentController(MailBoxService, $scope) {
		this.data = MailBoxService.data;
		this.getSelectedSpamItems = () => MailBoxService.getSelectedSpamItems();
		this.deleteMessageMsg = MailBoxService.deleteMessageMsg;
		this.showDraftMessage = MailBoxService.showDraftMessage;
		this.showSentMessage = MailBoxService.showSentMessage;
		this.selectAll = false;

		this.searchQuery = "";
		this.removeMail = function(mail) {
			MailBoxService.removeMail(mail._id)
		};

		this.checkAll = ()=> {
			this.data.spam.forEach((item)=> {
				item.selected = this.selectAll;
		})
		};

		this.removeMultiple = function() {
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