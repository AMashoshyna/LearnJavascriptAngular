(function() {
	'use strict';
	angular.module('MailBox')
		.component('sentItems', {
			templateUrl: 'src/MailBox/components/sentitems/sentItems.html',
			controller: SentItemsComponentController
		});

	SentItemsComponentController.$inject = ['MailBoxService','$scope'];
	function SentItemsComponentController(MailBoxService, $scope) {
		this.data = MailBoxService.data;
		this.getSelectedSentItems = () => MailBoxService.getSelectedSentItems();
		this.selectAll = false;

		this.checkAll = ()=> {
			this.data.sent.forEach((item)=> {
				item.selected = this.selectAll;
		})
		}
	}
})();