(function() {
	'use strict';
angular.module('UserData')
.component('newUserForm', {
	templateUrl: 'src/templates/newUserForm.html',
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
