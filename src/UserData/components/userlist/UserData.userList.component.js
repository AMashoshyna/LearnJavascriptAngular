(function(){
	'use strict';

	angular.module('UserData')
		.component('userList', {
			templateUrl: 'src/UserData/components/userlist/userlist.html',
			controller: UserListController
		});

	function UserListController(UserCardService) {
		var ctrl = this;
		ctrl.userData;
		UserCardService.getAllUsers().then((response) => ctrl.userData = response);

		ctrl.addUser = function(user) {
			UserCardService.addUser(user).then((response) => {
				ctrl.userData.push(response)
		})
		};

		ctrl.removeUser = function(user) {
			UserCardService.removeUser(user)
				.then(() => ctrl.userData.splice(ctrl.userData.indexOf(user), 1));
		}
	};
})();