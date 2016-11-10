(function() {
	'use strict';
	angular.module('MailBox')
	.component('sentItems', {
		templateUrl: 'src/MailBox/sentitems/sentItems.html',
		controller: SentItemsComponentController
	});
SentItemsComponentController.$inject = ['MailBoxService','$scope'];
function SentItemsComponentController(MailBoxService, $scope) {
	// MailBoxService.getAllMails();
	this.data = MailBoxService.data;


}	

})();