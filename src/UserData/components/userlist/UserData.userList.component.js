(function(){
	'use strict';

	angular.module('UserData')
	.component('userList', {
		templateUrl: 'src/UserData/components/userlist/userlist.html',
		controller: UserListController
	});

	function UserListController(UserCardService) {
		var ctrl = this;
		ctrl.userData = {};
		ctrl.addUser = addUser;
		ctrl.removeUser = removeUser;


		UserCardService.getAllUsers().then((response) => ctrl.userData = response);

		function addUser(user) {
			UserCardService.addUser(user).then((response) => {
				ctrl.userData.push(response)
			})
		};

		function removeUser(user) {
			UserCardService.removeUser(user)
			.then(() => ctrl.userData.splice(ctrl.userData.indexOf(user), 1));
		}
	};
})();