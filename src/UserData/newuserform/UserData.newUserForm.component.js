(function() {
	'use strict';
angular.module('UserData')
.component('newUserForm', {
	templateUrl: 'src/UserData/newuserform/newUserForm.html',
	controller: UserFormController
})

UserFormController.$inject = [];
function UserFormController() {
	this.user = {
		fullName: '',
		birthDate: '',
		gender: '',
		address: '',
		avatar: ''
	}

}
})(); 
