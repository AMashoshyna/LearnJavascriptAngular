(function() {
	'use strict';
angular.module('UserData')
.component('newUserForm', {
	templateUrl: 'src/UserData/newuserform/newUserForm.html',
	bindings: {

	},
	controller: UserFormController
})

UserFormController.$inject = ['UserCardService'];
function UserFormController(UserCardService) {
	this.user = {
		fullName: '',
		birthDate: '',
		gender: '',
		address: '',
		avatar: ''
	};

	this.addUser = function(user) {
		UserCardService.addUser(user)
	}

}
})(); 
