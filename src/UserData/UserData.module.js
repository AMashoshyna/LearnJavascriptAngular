(function() {
	'use strict';
angular.module('UserData', ['ui.router'])

// route controllers
.controller('UserDetailController', UserDetailController)



UserDetailController.$inject = ['users', 'user']
function UserDetailController(users, user) {
	this.users = users;
	this.user = user;

}
})();
