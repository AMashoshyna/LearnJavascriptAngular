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

UserCardFullController.$inject = ['UserCardService', '$state'];
function UserCardFullController(UserCardService, $state) {
	this.userData = UserCardService.userData;
	this.removeUser = function(user){
            UserCardService.removeUser(user);
            $state.go('userdetail')
	}

}




})();