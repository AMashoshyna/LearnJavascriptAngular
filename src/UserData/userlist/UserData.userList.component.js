(function(){
	'use strict';

	angular.module('UserData')

	.component('userList', {
	template: `
	<div class="container-fluid"><user-card user-data="$ctrl.userData" index="$index" 
	remove-user="$ctrl.removeUser(user)" 
	ng-repeat="user in $ctrl.userData track by $index"></user-card>
	</div>`,
	controller: UserListController,
});


	function UserListController(UserCardService) {
	var ctrl = this;
	ctrl.userData;
	UserCardService.getUserData().then(response => ctrl.userData = response);


    ctrl.addUser = function(user) {
	UserCardService.addUser(user).then(response => {
			ctrl.userData.push(response)
		});
	};

	ctrl.removeUser = function(user) {
		UserCardService.removeUser(user)
		.then(() => ctrl.userData.splice(ctrl.userData.indexOf(user), 1));
	}

};
})();