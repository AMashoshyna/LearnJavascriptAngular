(function(){
	'use strict';

	angular.module('UserData')

	.component('userList', {
	template: `<new-user-input add-user="$ctrl.addUser(newUser)"></new-user-input><br>
	<user-card user-data="$ctrl.userData" index="$index" 
	remove-user="$ctrl.removeUser(user)" 
	ng-repeat="user in $ctrl.userData track by $index"></user-card>`,
	controller: UserListController,
});


	function UserListController(UserCardService) {
	var ctrl = this;
	ctrl.userData;
	UserCardService.getUserData().then(response => ctrl.userData = response);


    ctrl.addUser = function(user) {
	UserCardService.addUser(user).then((newUser) => {
		UserCardService.getRandomAvatar().then(response => {
			newUser.avatar = response.results[0].picture.large;
			console.log(newUser.avatar );
			ctrl.userData.push(newUser)
		});
		
		});
	};

	ctrl.removeUser = function(user) {
		UserCardService.removeUser(user).then(() => ctrl.userData.splice(ctrl.userData.indexOf(user), 1));
	}

};
})();