(function() {
	'use strict';
	angular.module('MailBox')
		.component('sentItems', {
			templateUrl: 'src/MailBox/components/sentitems/sentItems.html',
			controller: SentItemsComponentController
		});
	SentItemsComponentController.$inject = ['MailBoxService','$scope'];
	function SentItemsComponentController(MailBoxService, $scope) {
		// MailBoxService.getAllMails();
		this.data = MailBoxService.data;
		this.selectAll = false;


		this.checkAll = ()=> {
			this.data.sent.forEach((item)=> {
				item.selected = this.selectAll;
		})
		}
	}
})();