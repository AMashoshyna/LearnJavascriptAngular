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
			confirm('Are you sure you want to delete this user from contact list?')
            UserCardService.removeUser(user);
            $state.go('list')
	}

}




})();