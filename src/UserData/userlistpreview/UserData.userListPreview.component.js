(function() {
	'use strict';
angular.module('UserData')
.component('userListPreview', {
	templateUrl: 'src/UserData/userlistpreview/userListPreview.html',
	bindings: {
		users: '<'
	},
	controller: userListPreviewController
})

function userListPreviewController() {
	for(var i= 0; i < this.users.length; i++) {
		this.users[i] = processName(this.users[i]);
	}
	function processName(user) {
		user.firstName = user.fullName.slice(0, user.fullName.indexOf(' '));
		user.lastName = user.fullName.slice(user.fullName.indexOf(' ') +1, user.fullName.length)
		return user;
		
	}
}
})();
