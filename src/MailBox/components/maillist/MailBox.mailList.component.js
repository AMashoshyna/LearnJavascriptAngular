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
		this.checkAll;
		this.moveToSpam;
		this.removeMail;
		this.removeMultiple;
		this.selectAll = false;
		this.showDraftMessage = MailBoxService.showDraftMessage;
		this.showSentMessage = MailBoxService.showSentMessage;

		this.removeMail = function(mail) {
			MailBoxService.removeMail(mail._id)
		};

		this.checkAll = ()=> {
			this.data.inbox.forEach((item)=> {
				item.selected = this.selectAll;
		})
		}

		this.removeMultiple = function() {
			confirm("Are you sure you want to delete selected items?");
			this.getSelectedItems().forEach(function(mail){
				MailBoxService.removeMail(mail._id)
			})
		};

		this.moveToSpam = function() {
			this.getSelectedItems().forEach(function(mail){
				MailBoxService.moveToSpam(mail)
			})
		};

		$scope.$on('$stateChangeStart', function() {
			MailBoxService.showDraftMessage.value = false;
			MailBoxService.showSentMessage.value = false;
		})
	}
})();