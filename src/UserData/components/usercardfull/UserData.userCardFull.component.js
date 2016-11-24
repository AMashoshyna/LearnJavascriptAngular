(function() {
	'use strict';

	angular.module('UserData')

		.component('userCardFull',  {
			templateUrl: 'src/UserData/components/usercardfull/userCardFull.html',
			bindings: {
				user: '<'
			},
			controller: UserCardFullController
		});

	UserCardFullController.$inject = ['UserCardService', '$state'];
	function UserCardFullController(UserCardService, $state) {
		this.userData = UserCardService.allUsersData;
		this.removeUser = function(user){
			confirm('Are you sure you want to delete this user from contact list?');
			UserCardService.removeUser(user);
			$state.go('list')
		}
	}
})();