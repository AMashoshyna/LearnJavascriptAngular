(function() {
	'use strict';

	angular.module('UserData')

	.component('userCardFull',  {
		templateUrl: 'src/UserData/usercardfull/userCardFull.html',
		bindings: {
			user: '<'
		},

		controller: UserCardFullController

  });

UserCardFullController.$inject = ['UserCardService'];
function UserCardFullController(UserCardService) {
	this.userData = UserCardService.userData;

}




})();