(function() {
	'use strict';
angular.module('UserData')
.component('newUserForm', {
	templateUrl: 'src/UserData/components/newuserform/newUserForm.html',
	controller: UserFormController
})

UserFormController.$inject = ['UserCardService', '$state'];
function UserFormController(UserCardService, $state) {
	var ctrl = this;
	ctrl.addUser = addUser;
	ctrl.user = {
		firstName: '',
		lastName: '',
		birthDate: '',
		gender: '',
		address: '',
		avatar: ''
	};
	ctrl.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

	function addUser(user) {
		debugger;
		user.fullName = user.firstName + ' '+ user.lastName;
		UserCardService.addUser(user).then((response)=>{
			this.user = response;
			$state.go('userdetail', {'userId': response._id})
		})
	}
}
})(); 
