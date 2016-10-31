(function() {
	'use strict';
angular.module('UserData', ['ui.router'])

// route controllers
.controller('UserDetailController', UserDetailController)
.controller('EditProfileStateController', EditProfileStateController)



UserDetailController.$inject = ['users','user']
function UserDetailController(users, user) {
	this.users = users;

	this.user = (user || users[0]);
}

EditProfileStateController.$inject = ['user']
function EditProfileStateController(user) {
	this.user = user;
	this.user.birthdate = new Date (Date.parse(user.birthdate));

}

})();
