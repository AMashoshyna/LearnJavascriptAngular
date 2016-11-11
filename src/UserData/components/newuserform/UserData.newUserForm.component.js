(function() {
	'use strict';
angular.module('UserData')
.component('newUserForm', {
	templateUrl: 'src/UserData/newuserform/newUserForm.html',
	bindings: {

	},
	controller: UserFormController
})

UserFormController.$inject = ['UserCardService', '$state'];
function UserFormController(UserCardService, $state) {
	this.user = {
		firstName: '',
		lastName: '',
		birthDate: '',
		gender: '',
		address: '',
		avatar: ''
	};
	

	this.addUser = function(user) {
		user.fullName = user.firstName + ' '+ user.lastName;
		this.user = UserCardService.addUser(user).then(response=>{
			$state.go('userdetail', {'userId': response._id})
		})
	}

}
})(); 
